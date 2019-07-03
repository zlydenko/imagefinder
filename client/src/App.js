import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';
import History from './components/History';

import CircularProgress from '@material-ui/core/CircularProgress';

import Axios from 'axios';

const { REACT_APP_API_ROOT } = process.env;

export default function App(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [imagesFound, setTotalCount] = React.useState(null);
  const [loading, toggleLoading] = React.useState(false);
  const [currentView, setCurrentView] = React.useState('main');
  const [history, setHistory] = React.useState([]);
  const [historyLoading, toggleHistoryLoading] = React.useState(false);

  const search = (value, pageNumber = null, isInitial = true) => {
    if (isInitial) toggleLoading(true);
    let request = {
      username: props.username,
      input: value
    };

    if (pageNumber) request.page = pageNumber;

    setSearchValue(value);

    Axios.post(`http://localhost:9001/api/search`, request)
      .then(({ data: { data, total } }) => {
        if (data.length === 0) setTotalCount(null);
        setSearchResults(data);
        setTotalCount(total);
      })
      .finally(() => {
        if (isInitial) toggleLoading(false);
      });
  };

  const likeImage = (imageUrl, state) => {
    Axios.post(`http://localhost:9001/api/like`, {
      username: props.username,
      imageUrl,
      state
    });
  };

  const goToPage = pageNumber => {
    search(searchValue, pageNumber + 2);
  };

  const goToHistory = () => {
    setSearchValue('');
    setTotalCount(null);
    setSearchResults([]);
    fetchHistory();
    setCurrentView('history');
  };

  const goToMain = () => {
    setCurrentView('main');
  };

  const fetchHistory = () => {
    toggleHistoryLoading(true);

    Axios.get(`http://localhost:9001/api/history`, {
      params: {
        username: props.username
      }
    })
      .then(({ data }) => {
        if (data.message) {
          throw data.message;
        }
        console.log(data);
        setHistory(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        toggleHistoryLoading(false);
      });
  };

  const goToHistoryElement = text => {
    setCurrentView('main');
    setSearchValue(text);
    search(text);
  };

  const deleteHistory = historyId => {
    Axios.delete(`http://localhost:9001/api/history`, {
      data: {
        username: props.username,
        id: historyId
      }
    })
      .then(({ data }) => {
        if (data.message !== 'OK') throw data.message;
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        fetchHistory();
      });
  };

  return (
    <div>
      <Navbar
        currentPage={currentView === 'main' ? 'home' : 'history'}
        activePageTitle={currentView === 'main' ? 'Image finder' : 'Image finder / History'}
        goToMain={goToMain}
        goToHistory={goToHistory}
        logOutFn={props.logOutFn}
        authenticated={true}
        username={props.username}
      >
        {currentView === 'main' ? (
          <React.Fragment>
            <Search searchFn={search} value={searchValue} />
            {loading ? <CircularProgress /> : !!imagesFound && <ImageGrid images={searchResults} likeFn={likeImage} refetchFn={() => search(searchValue, undefined, false)} />}
          </React.Fragment>
        ) : (
          <History deleteHistory={deleteHistory} goToHistory={goToHistoryElement} history={history} loading={historyLoading} />
        )}
      </Navbar>
      {!!imagesFound && currentView === 'main' && <Pagination pagesCounter={Math.ceil(imagesFound / 24)} goto={goToPage} />}
    </div>
  );
}

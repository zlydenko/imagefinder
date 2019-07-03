import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ImageGrid from "./components/ImageGrid";
import Pagination from "./components/Pagination";
import History from "./components/History";

import CircularProgress from "@material-ui/core/CircularProgress";

import Axios from "axios";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [imagesFound, setTotalCount] = React.useState(null);
  const [loading, toggleLoading] = React.useState(false);
  const [currentView, setCurrentView] = React.useState("main");

  const search = (value, pageNumber = null) => {
    toggleLoading(true);
    let request = {
      username: "vasya",
      input: value
    };

    if (pageNumber) request.page = pageNumber;

    setSearchValue(value);

    Axios.post("http://192.168.0.35:9001/api/search", request)
      .then(({ data: { data, total } }) => {
        if (data.length === 0) setTotalCount(null);
        setSearchResults(data);
        setTotalCount(total);
      })
      .finally(() => {
        toggleLoading(false);
      });
  };

  const likeImage = (imageUrl, state) => {
    Axios.post("http://192.168.0.35:9001/api/like", {
      username: "vasya",
      imageUrl,
      state
    });
  };

  const goToPage = pageNumber => {
    search(searchValue, pageNumber + 2);
  };

  const goToHistory = () => {
    setTotalCount(null);
    setSearchResults([]);
    setCurrentView("history");
  };

  const goToMain = () => {
    setCurrentView("main");
  };

  return (
    <div>
      <Navbar
        currentPage={currentView === "main" ? "home" : "history"}
        activePageTitle={
          currentView === "main" ? "Image finder" : "Image finder / History"
        }
        goToMain={goToMain}
        goToHistory={goToHistory}
        authenticated={true}
      >
        {currentView === "main" ? (
          <React.Fragment>
            <Search searchFn={search} />
            {loading ? (
              <CircularProgress />
            ) : (
              !!imagesFound && (
                <ImageGrid
                  images={searchResults}
                  likeFn={likeImage}
                  refetchFn={() => search(searchValue)}
                />
              )
            )}
          </React.Fragment>
        ) : (
          <History username={"vasya"} />
        )}
      </Navbar>
      {!!imagesFound && currentView === "main" && (
        <Pagination
          pagesCounter={Math.ceil(imagesFound / 24)}
          goto={goToPage}
        />
      )}
    </div>
  );
}

export default App;

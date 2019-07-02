import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ImageGrid from "./components/ImageGrid";
import Pagination from "./components/Pagination";

import Axios from "axios";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [imagesFound, setTotalCount] = React.useState(null);

  const search = (value, pageNumber = null) => {
    let request = {
      username: "vasya",
      input: value
    };

    if (pageNumber) request.page = pageNumber;

    setSearchValue(value);

    Axios.post("http://192.168.0.35:9001/api/search", request).then(
      ({ data: { data, total } }) => {
        if (data.length === 0) setTotalCount(null);
        setSearchResults(data);
        setTotalCount(total);
      }
    );
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

  return (
    <div>
      <Navbar
        currentPage={"home"}
        activePageTitle={"Image finder"}
        authenticated={true}
      >
        <Search searchFn={search} />
        {!!imagesFound && (
          <ImageGrid
            images={searchResults}
            likeFn={likeImage}
            refetchFn={() => search(searchValue)}
          />
        )}
      </Navbar>
      {!!imagesFound && (
        <Pagination
          pagesCounter={Math.ceil(imagesFound / 24)}
          goto={goToPage}
        />
      )}
    </div>
  );
}

export default App;

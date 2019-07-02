import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ImageGrid from "./components/ImageGrid";

import Axios from "axios";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [imagesFound, setTotalCount] = React.useState(null);

  const search = value => {
    setSearchValue(value);
    Axios.post("http://192.168.0.35:9001/api/search", {
      username: "vasya",
      input: value
    }).then(({ data: { data, total } }) => {
      if (data.length === 0) setTotalCount(null);
      setSearchResults(data);
      setTotalCount(total);
    });
  };

  const likeImage = (imageUrl, state) => {
    Axios.post("http://192.168.0.35:9001/api/like", {
      username: "vasya",
      imageUrl,
      state
    });
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
    </div>
  );
}

export default App;

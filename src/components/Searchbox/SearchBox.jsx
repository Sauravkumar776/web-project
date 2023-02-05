import React from "react";
import "./searchbox.css";

const SearchBox = (props) => {
  console.log(props);
  return (
    <div>
      <input
        className="search_news"
        type="search"
        placeholder="search"
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBox;

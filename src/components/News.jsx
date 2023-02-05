// import axios from "axios";
// import React from "react";

// class News extends Component {
//   constructor() {
//     super();

//     this.state = {
//       news: [],
//     };

//     console.log("constructor initialized");
//   }

//   componentDidMount() {
//     axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=us&apiKey=048ad05127cb45be9ac1284f4ce0cca4"
//       )
//       .then((result) => result.data.articles)
//       .then((users) =>
//         this.setState(
//           () => {
//             return { news: users };
//           },
//           () => console.log("component did mount")
//         )
//       );
//   }

//   render() {
//     return (
//       <div>
//         {console.log("rendering started")}

//         <input
//           className="search-box"
//           type="search"
//           placeholder="search news"
//           onChange={(event) => {
//             console.log(event.target.value);
//             const searchString = event.target.value.toLowerCase();
//             const filteredNews = this.state.news.filter((article) => {
//               return article.title.toLowerCase().includes(searchString);
//             });

//             this.setState({
//               news: filteredNews,
//             });
//           }}
//         />

//         {this.state.news.map((article, idx) => {
//           return (
//             <div key={idx}>
//               <h1>{article.title}</h1>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default News;

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./Searchbox/SearchBox";
import CardList from "./CardList/CardList";
import "./news.css";
// import CoverflowEffect from "./CoverflowEffect/CoverflowEffect";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchString, setSearchString] = useState(" ");
  const api =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=048ad05127cb45be9ac1284f4ce0cca4";

  const fetchData = (api) => {
    axios
      .get(api)
      .then((result) => result.data)
      .then((users) => setNews(users.articles));
  };

  const searchNews = (event) => {
    console.log(" search working");
    const searchField = event.target.value.toLowerCase();
    setSearchString(searchField);
    console.log(filteredNews);
  };

  const filteredNews = news.filter((article) => {
    return article.title.toLowerCase().includes(searchString);
  });

  useEffect(() => {
    fetchData(api);
  }, []);

  return (
    <div className="news_container">
      {/* <input
        className="search_news"
        type="search"
        placeholder="search"
        onChange={(e) => searchNews(e)}
      /> */}
      <SearchBox handleChange={(e) => searchNews(e)} />
      <div className="parent_container">
        <CardList news={filteredNews} />
        {/* <CoverflowEffect news={filteredNews} /> */}
      </div>
    </div>
  );
};
export default News;

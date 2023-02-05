import React from "react";
import "./card.css";
function Card(props) {

  const { title, description, urlToImage, url } = props.article;

  return (
    <div className="card_container">
      <div className="news_img">
        {" "}
        <img className="news_image" src={urlToImage} alt={title} />
      </div>
      <div className="news_title">
        {" "}
        <h3>{title}</h3>
      </div>
      <div className="news_description">
        <p>{description}</p>
      </div>

      <a className="card-link" target="_blank" href={url} rel="noreferrer">
        Read more
      </a>
    </div>
  );
}

export default Card;

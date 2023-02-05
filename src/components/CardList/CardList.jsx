import React from 'react';
import Card from '../Card/Card';
import './cardlist.css';

function CardList(props) {

    const {news} = props;

    return (
        <div className="card-list">
        {news.map((article,idx) => {
            return <Card key={idx} article={article} />;
        })}
      </div>
    );
}

export default CardList;
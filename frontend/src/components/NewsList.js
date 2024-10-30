import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ news }) {
  return (
    <div className="news-list">
      {news.map((article) => (
        <NewsCard key={article.NewsID} {...article} />
      ))}
    </div>
  );
}

export default NewsList;
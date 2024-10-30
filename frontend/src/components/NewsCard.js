import React from 'react';
import '../styles/NewsCard.css';
import { fetchNewsUrl } from '../services/api';

function NewsCard({ title, content, NewsID }) {
  const handleReadMore = async () => {
    const newsData = await fetchNewsUrl(NewsID);
    if (newsData.url) {
      window.open(newsData.url, '_blank');
    } else {
      alert('URL not available');
    }
  };

  return (
    <div className="news-card">
      <h2>{title}</h2>
      <p>{content.substring(0, 150)}...</p>
      <button onClick={handleReadMore} className="read-more-button">Read More</button>
    </div>
  );
}

export default NewsCard;

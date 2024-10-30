import React, { useEffect, useState } from 'react';
import { fetchNewsUrl } from '../services/api';
import '../styles/NewsCard.css';

function NewsCard({ title, content, NewsID }) {
  const [provider, setProvider] = useState('Unknown Provider');

  useEffect(() => {
    const getProvider = async () => {
      const newsData = await fetchNewsUrl(NewsID);
      if (newsData.url) {
        const url = newsData.url;

        // Determine the provider based on the URL prefix
        if (url.substring(0, 15) === 'https://edition') {
          setProvider('CNN News');
        } else if (url.substring(0, 15) === 'https://eu.usat') {
          setProvider('USA Today News');
        } else {
          setProvider('Unknown Provider');
        }
      } else {
        setProvider('Unknown Provider');
      }
    };

    getProvider();
  }, [NewsID]);

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
      <span className="news-provider">{provider}</span>
      <button onClick={handleReadMore} className="read-more-button">Read More</button>
    </div>
  );
}

export default NewsCard;

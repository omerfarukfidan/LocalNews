import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchNews } from '../services/api';

function GlobalNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews();
      setNews(newsData.filter((article) => article.type === 'global'));
    };
    getNews();
  }, []);

  return (
    <div>
      <h2>Global News</h2>
      <NewsList news={news} />
    </div>
  );
}

export default GlobalNews;
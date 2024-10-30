import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { fetchCityNews } from '../services/api';
import { useParams } from 'react-router-dom';

function CityNews() {
  const { city } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchCityNews(city);
      setNews(newsData);
    };
    getNews();
  }, [city]);

  return (
    <div>
      <h2>News in {city}</h2>
      <NewsList news={news} />
    </div>
  );
}

export default CityNews;
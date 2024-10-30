export const fetchNews = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/news');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
};

export const fetchCityNews = async (city) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/news/${city}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch news for city ${city}:`, error);
    return [];
  }
};

export const fetchDistinctCities = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/distinct-cities');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch distinct cities:', error);
    return [];
  }
};
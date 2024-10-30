import React from 'react';

function NewsCard({ title, content, location }) {
  return (
    <div className="news-card">
      <h2>{title}</h2>
      <p>{content.substring(0, 150)}...</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default NewsCard;
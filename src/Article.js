import React from 'react';


const Article = ({ title, content, image }) => {
  return (
    <div className="article">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Article;

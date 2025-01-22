import React from 'react';
import Article from './Article';
import './Home.css';

const articlesData = [
  {
    title: 'Article 1',
    content: 'This is the content of the first article.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Article 2',
    content: 'This is the content of the second article.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Article 3',
    content: 'This is the content of the third article.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Article 4',
    content: 'This is the content of the fourth article.',
    image: 'https://via.placeholder.com/300',
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to Our Blog</h1>
      <div className="article-grid">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            content={article.content}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './Searchbar.css'; 

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchData = (value) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.articles.filter((article) => 
          article.title.toLowerCase().includes(value.toLowerCase())
        );
        setArticles(filteredResults);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value) {
      fetchData(value);
    } else {
      setArticles([]);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={input ? 'filtered-results light-background' : 'filtered-results'}>
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="article-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;

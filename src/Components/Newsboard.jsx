import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage,setPostsPerPage]=useState(8);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, [category]);

  const lastPostIndex=currentPage* postsPerPage;
  const firstPostIndex=lastPostIndex-postsPerPage;
  const currentPosts=articles.slice(firstPostIndex,lastPostIndex);

  return (
    <div>
      <h1 className="text-center"><span className="badge text-bg-danger"> Latest News</span></h1>
      {error && <p className="text-center text-danger">Error: {error}</p>}
      {articles.length === 0 && !error && <p className="text-center">Loading...</p>}
      {currentPosts.map((news, index) => (
        <NewsItem key={news.url} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
      <Pagination totalPosts={articles.length}
      postsPerPage={postsPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
    </div>
  );
};

export default Newsboard;

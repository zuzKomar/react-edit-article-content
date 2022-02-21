import React, { useState, useEffect } from "react";
import "./App.css";
import Article from "./components/Article";
import ArticleForm from "./components/ArticleForm";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      {articles.length > 0 && (
        <>
          <h1>List of your articles</h1>
          {articles.map((article) => (
            <Article article={article} />
          ))}
        </>
      )}

      <h1>Add content to article</h1>
      <ArticleForm articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;

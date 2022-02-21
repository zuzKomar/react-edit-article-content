import React, { useState, useEffect } from "react";

const Article = ({ article }) => {
  const [value, setValue] = useState(article);

  useEffect(()=>{
        document.getElementById("art").innerHTML = article;
  },[article])

  return (
    <div className="article">
      <p id="art">{value}</p>
    </div>
  );
};

export default Article;

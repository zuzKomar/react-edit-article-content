import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article" dangerouslySetInnerHTML={{ __html: article }} />
  );
};

export default Article;

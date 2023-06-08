import React from "react";

const Post = ({ data }) => {
  const { title, author, body, tags, date, isPublished } = data;

  return (
    <div className="post">
      <div className="post-heading">
        <h2>{title}</h2>
        {isPublished ? body : "Coming soon!"}
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <h3>Tags:</h3>
      <ul>
        {tags.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Post;

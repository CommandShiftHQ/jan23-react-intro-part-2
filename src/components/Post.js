import React, { useState } from "react";
import "../styles/post.css";

const Post = ({ postContent, setLastUpvoted }) => {
  const [count, setCount] = useState(0);
  const { title, author, body, tags, date, isPublished } = postContent;

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setLastUpvoted(title);
  };

  return (
    <div className="post">
      <div className="post-heading">
        <h2>{title}</h2>
        {isPublished ? body : "Coming soon!"}
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <div className="post-counter">
        <button onClick={handleClick}>Upvote</button>
        <span>Upvotes: {count}</span>
      </div>
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

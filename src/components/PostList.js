import React from "react";
import Post from "./Post";
import "../styles/postlist.css";

const PostList = ({ postlist }) => {
  postlist.map((post) => {
    return <Post data={post} />;
  });

  return (
    <div className="postlist">
      {postlist.map((post, i) => {
        return <Post key={i} postContent={post} />;
      })}
    </div>
  );
};

export default PostList;

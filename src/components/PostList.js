import React, { useState } from "react";
import Post from "./Post";
import "../styles/postlist.css";

const PostList = ({ postlist }) => {
  const [lastUpvoted, setLastUpvoted] = useState("");

  return (
    <div className="postlist">
      <div>Last upvoted: {lastUpvoted}</div>
      {postlist.map((post, i) => {
        return (
          <Post key={i} postContent={post} setLastUpvoted={setLastUpvoted} />
        );
      })}
    </div>
  );
};

export default PostList;

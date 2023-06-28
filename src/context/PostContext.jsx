import { createContext, useState } from "react";

export const PostContext = createContext()

export function PostProvider({ children }) {

  const [bookmarkPost, setBookmarkPost] = useState([])

  // console.log({bookmarkPost})

  const handlePostUpdate = ({ _id, username, content, fullName, likes }) => {
    const newBookmarkPost = [...bookmarkPost, { _id, username, content, fullName, likes }];
    setBookmarkPost(newBookmarkPost)
    // console.log(`id : ${_id}, username: ${username}, content : ${content}`);
  };

  return (
    <PostContext.Provider value={{ bookmarkPost, handlePostUpdate }}>
      {children}
    </PostContext.Provider>
  );
} 
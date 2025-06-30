import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { LeftSideComponent } from "../../components/left-sidebar/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
import { PostCard } from "../../components/post-card-component/PostCard"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faBookmark as solidBookmark, faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

export function PostPage() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const getSinglePostService = async (postId) => {
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      return response;
    } catch (error) {
      console.error("Error in getSinglePostService:", error);
      throw error;
    }
  };

  const fetchSinglePost = async () => {
    try {
      const response = await getSinglePostService(postId);
      if (response.status === 200) {
        setPost(response.data.post); // adjust based on your API response structure
      }
    } catch (error) {
      console.error("Error during fetchSinglePost:", error);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  useEffect(() => {
    if (post && Object.keys(post).length > 0) {
      console.log("CHECKPOST (after set):", post);
    }
  }, [post]);

  return (
    <div className="container" style={{ position: "relative" }}>
      <Navbar />
      <LeftSideComponent />
      <main className="mr-l h-full white-bg">
        <h3 className="pt-s ml-s">
          <div>
            <Link to="/explore">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>{" "}
            Post
          </div>
        </h3>
        {/* <h2>Check {postId}</h2> */}
        <div>
          {Object.keys(post).length > 0 ? (
            <div>
              <p>{post.content}</p>
              <p>by @{post.username}</p>
            </div>

            // <>
            //   <div className="white-bg mr-xxl p-xs mt-s">
            //     <div className="flex flex-row nowrap p-xs">
            //       <div className="grey-bg br-full width-xl height-xl p-s mr-xs"></div>
            //       <div>
            //         <div className="flex flex-row flex-align-center flex-space-between">
            //           <div className="flex flex-row">
            //             <p className="fw-semibold">{post.firstName} {post.lastName}</p>
            //             <p className="grey-color pl-xs">
            //               @{post.username} <span className="pl-xs">•</span>
            //               <span className="pl-xs">{post.createdAt}</span>
            //             </p>
            //           </div>
            //           <p>∙∙∙</p>
            //         </div>
            //           <p className="pr-s pt-xs">{post.content}</p>
            //         <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
            //           <button onClick={post.incrementLikes} style={{ backgroundColor: "transparent", border: "none" }}>
            //             <FontAwesomeIcon
            //               icon={faHeart}
            //               style={{ color: isLiked ? "red" : "inherit", fontSize: "1.2rem" }}
            //             />
            //           </button>
            //           <span style={{ display: !showLikes > 0 ? "block" : "none" }}>{post.likesCounter}</span>
            //           <FontAwesomeIcon icon={post.faCommentAlt} />
            //           <FontAwesomeIcon icon={post.faShareAlt} />
            //           <FontAwesomeIcon
            //             icon={post.isBookmarked ? solidBookmark : regularBookmark}
            //             style={{ color: isBookmarked ? "black" : "inherit", fontSize: "1.2rem" }}
            //             onClick={handleBookmark}
            //           />
            //           {/* <IconBookmark /> */}
            //           <i className="bi bi-chat-left"></i>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </>
          ) : (
            <p>Loading post...</p>
          )}
        </div>
      </main>
      <RightSideComponent />
    </div>
  );
}

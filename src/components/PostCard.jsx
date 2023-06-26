import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShareAlt, faBookmark as solidBookmark, faCommentAlt, faHeart  } from '@fortawesome/free-solid-svg-icons';
import {faBookmark as regularBookmark} from '@fortawesome/free-regular-svg-icons';

// import IconBookmark from '../../components/icons/BookMark';

export function PostCart({
  _id,
  content,
  username,
  fullName,
  postImage,
  createdAt,
  comments,
  likes
})

{
  const[likesCounter, setLikesCounter] = useState(likes.likeCount)
  const[showLikes, setShowLikes] = useState(true)
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  function incrementLikes() {
    if (isLiked) {
      setLikesCounter(likesCounter - 1);
    } else {
      setLikesCounter(likesCounter + 1);
    }
    setIsLiked(!isLiked);
    setShowLikes(false);
  }

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }
  return(
    <>
      <div className="white-bg mr-xxl p-xs mt-s">
        <div className="flex flex-row nowrap p-xs">
          <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
          <div>
            <div className="flex flex-row flex-align-center flex-space-between">
              <div className="flex flex-row">
                <p className="fw-semibold">{fullName}</p>
                <p className="grey-color pl-xs">
                  @{username} <span className="pl-xs">•</span>
                  <span className="pl-xs">{createdAt}</span>
                </p>
              </div>
              <p>∙∙∙</p>
            </div>
            <p className="pr-s pt-xs">{content}</p>
            <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
              <button onClick={incrementLikes} style={{backgroundColor: "transparent", border: "none"}}>
              <FontAwesomeIcon
              icon={faHeart}
              style={{ color: isLiked ? "red" : "inherit", fontSize: "1.2rem" }}
            />
              </button>
              <span style={{display: !showLikes > 0 ? "block" : "none"}}>{likesCounter}</span>
              <FontAwesomeIcon icon={faCommentAlt} />
              <FontAwesomeIcon icon={faShareAlt} />
              <FontAwesomeIcon
            icon={isBookmarked ? solidBookmark : regularBookmark}
            style={{ color: isBookmarked ? "black" : "inherit", fontSize: "1.2rem" }}
            onClick={handleBookmark}
          />
              {/* <IconBookmark /> */}
              <i className="bi bi-chat-left"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
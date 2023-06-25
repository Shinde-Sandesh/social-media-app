import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faHeart, faBookmark, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
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
  const[likesCounter, setLikesCounter] = useState(0)
  const[showLikes, setShowLikes] = useState(true)
  
  function incrementLikes(){
    setLikesCounter(likesCounter + 1)
    setShowLikes(false)
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
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <span style={{display: !showLikes > 0 ? "block" : "none"}}>{likesCounter}</span>
              <FontAwesomeIcon icon={faCommentAlt} />
              <FontAwesomeIcon icon={faShareAlt} />
              <FontAwesomeIcon icon={faBookmark} />
              {/* <IconBookmark /> */}
              <i className="bi bi-chat-left"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
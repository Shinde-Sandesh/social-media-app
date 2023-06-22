import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faHeart, faBookmark, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { LeftSideComponent } from "../../components/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
import IconBookmark from '../../components/icons/BookMark';

export function ExplorePage(){

  const [data, setData] = useState([]);
  const[likesCounter, setLikesCounter] = useState(0)
  const[showLikes, setShowLikes] = useState(true)
  
  const fetchData = async () => {
    const response = await fetch("/api/posts")
    const data = await response.json()
    console.log(data)
    setData(data.posts)
  }

    useEffect(() => {
      fetchData();
  }, []);

  function incrementLikes(){
    setLikesCounter(likesCounter + 1)
    setShowLikes(false)
  }

  return(
    <>
      <div className="container">
      <Navbar />
      <LeftSideComponent />
      <main className="mt-xl">
        <h3 className="pt-s">Explore</h3>
        <div className="flex flex-row nowrap">
          <div
            className="border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold"
          >
            For You
          </div>
          <div
            className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
          >
            Trending
          </div>
          <div
            className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
          >
            Technology
          </div>
          <div
            className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
          >
            Sports
          </div>
          <div
            className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
          >
            News
          </div>
        </div>
        <>
        {
          data.length > 0 && data.map((user) =>
            <div className="white-bg mr-xxl p-xs mt-s">
              <div className="flex flex-row nowrap p-xs">
                <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
                <div>
                  <div className="flex flex-row flex-align-center flex-space-between">
                    <div className="flex flex-row">
                      <p className="fw-semibold">{user.displayName}</p>
                      <p className="grey-color pl-xs">
                        @{user.username} <span className="pl-xs">•</span>
                        <span className="pl-xs">{user.createdAt}</span>
                      </p>
                    </div>
                    <p>∙∙∙</p>
                  </div>
                  <p className="pr-s pt-xs">{user.content}</p>
                  <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                    <button onClick={incrementLikes} style={{backgroundColor: "transparent", border: "none"}}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <span style={{display: !showLikes > 0 ? "block" : "none"}}>{likesCounter}</span>
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <FontAwesomeIcon icon={faShareAlt} />
                    {/* <FontAwesomeIcon icon={faBookmark} /> */}
                    <IconBookmark />
                    <i className="bi bi-chat-left"></i>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </main>
      <RightSideComponent />
    </div>
    </>
  )
}
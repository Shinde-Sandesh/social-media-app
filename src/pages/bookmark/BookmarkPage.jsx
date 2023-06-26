import React from "react";
import { useContext } from "react";
import { LeftSideComponent } from "../../components/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
import { PostContext } from "../../context/PostContext";

export function BookmarkPage(){

  const {bookmarkPost, handlePostUpdate} = useContext(PostContext)

  console.log({bookmarkPost})
  return(
    <>
      <div className="container">
      <Navbar />
      <LeftSideComponent />
      <main className="mt-xl">
        <h3 className="pt-s">Your Bookmarks</h3>
        {/*<div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color pl-xs">
                    @tanaypratap <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p className="pr-s pt-xs">
                Non programmers on my timeline. Attention. <br />
                <br />
                After placing 100+ programmers i in top Indian startups, I am
                thinking of coming up with a program for business roles as well.
                <br />
                <br />
                Interested in helping me build this course? Join the telegram
                group (in next tweet)
              </p>
              <div
                className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center"
              >
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          {
            bookmarkPost.length === 0 && <h2>No Post Bookmarked</h2>
          }
          {
            bookmarkPost.map((post) => {
              const { _id, username, content} = post;

              return(
                <React.Fragment key={_id}>
                  {/* <p>{_id}</p>
                  <p>{username}</p>
                  <p>{content}</p> */}
                           <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">{_id}</p>
                  <p className="grey-color pl-xs">
                    @{username} <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p className="pr-s pt-xs">{content}</p>
              <div
                className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center"
              >
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
                </React.Fragment>
              )
            })
          }
        </div>

      </main>
      <RightSideComponent />
    </div>
    </>
  )
}
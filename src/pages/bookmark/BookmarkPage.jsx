import React from "react";
import { useContext } from "react";
import { LeftSideComponent } from "../../components/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
import { PostContext } from "../../context/PostContext";

export function BookmarkPage() {

  const { bookmarkPost, handlePostUpdate } = useContext(PostContext)

  console.log({ bookmarkPost })
  return (
    <>
      <div className="container">
        <Navbar />
        <LeftSideComponent />
        <main className="mt-xl">
          <h3 className="pt-s">Your Bookmarks</h3>
          <div>
            {
              bookmarkPost.length === 0 && <h2>No Post Bookmarked</h2>
            }
            {
              bookmarkPost.map((post) => {
                const { _id, username, content, fullName, likes } = post;

                return (
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
                              <p className="fw-semibold">{fullName}</p>
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
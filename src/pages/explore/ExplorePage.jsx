import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faHeart, faBookmark, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { LeftSideComponent } from "../../components/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
// import IconBookmark from '../../components/icons/BookMark';
import { PostCard, PostCart } from '../../components/PostCard';

export function ExplorePage() {

  const [data, setData] = useState([]);
  const [likesCounter, setLikesCounter] = useState(0)
  const [showLikes, setShowLikes] = useState(true)

  const fetchData = async () => {
    const response = await fetch("/api/posts")
    const data = await response.json()
    console.log(data)
    setData(data.posts)
  }

  useEffect(() => {
    fetchData();
  }, []);

  // function incrementLikes() {
  //   setLikesCounter(likesCounter + 1)
  //   setShowLikes(false)
  // }

  return (
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
                <PostCard {...user} noComments />
              )}
          </>
        </main>
        <RightSideComponent />
      </div>
    </>
  )
}
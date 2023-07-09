import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

import { LeftSideComponent } from "../../components/LeftSideComponent";
import { Navbar } from "../../components/Navbar";
import { RightSideComponent } from "../../components/RightSideComponent";
import { PostCart } from "../../components/PostCard";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function PostPage() {

  // const [singlePost, setSinglePost] = useState({});
  const [post, setPost] = useState([])
  const { postId } = useParams();

  function getProductDetails(products, postId) {
    return products.find((product) => product.id === postId);
  }

  // const product = getProductDetails(phonesDB.data, postId);

  const getSinglePostService = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`);
      // console.log(response)
      return response;
    } catch (error) {
      console.error();
    }
  }

  // const fetchPost = async () => {
  //   try {
  //     const response = await axios.get(`/api/posts/:${postId}`)
  //     console.log("response",response)
  //     if (response.status === 200) {
  //       const data = await response.json()
  //       console.log(data)
  //       setSinglePost(response?.data?.post);
  //       console.log(singlePost)
  //       // setData(data.posts)
  //     } else {
  //       console.error('Failed to fetch post:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //   }
  // }

  const fetchSinglePost = async() => {
    try {
      const response = await getSinglePostService(postId)

      if (response.status === 200) {
        const data = await response.json()
        setPost(response.data)
        console.log(data)
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <>
      <div className="container" style={{ position: "relative;" }}>
        <Navbar />
        <LeftSideComponent />
        <main className="mr-l h-full white-bg">
          <h3 className="pt-s ml-s">
            <div><Link to='/explore'><FontAwesomeIcon icon={faArrowLeft} /></Link> Post</div>
          </h3>
          <h2>Check {postId}</h2>
          <div>
            {/* {Object.keys(post).length > 0 &&
              <p>{post.content}</p>
            } */}
            {/* <p>{post.username}</p> */}
          </div>
        </main>
        <RightSideComponent />
      </div>
    </>
  )
}
// import '../pages/home/HomePage.css'

import { Link } from "react-router-dom";

export function LandingPage(){
  return(
    <>
      <div className="flex flex-row flex-center h-full w-full" style={{gap: "10rem"}}>
      <div className="flex flex-column flex-space-between " style={{height: "70vh", width: "25rem"}}>
        <Link to = '/home'>
          <h2 className="fw-black txt-xl"><span className="primary-color">My</span> Website</h2>
        </Link>
        <div className="flex flex-column " style={{gap: "1.2rem;"}}>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">FOLLOW</span> PEOPLE AROUND THE GLOBE
          </h2>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">CONNECT</span> WITH YOUR FRIENDS
          </h2>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">SHARE</span> WHAT YOU THINKING
          </h2>
        </div>
        <div>
            <Link to = "/signup"><button className="primary-bg w-full p-s secondary-color border-none outline-none txt-s">Join Now</button></Link>
            <Link to = "/login"><p className="primary-color txt-s txt-center mt-xs">Already have an account?</p></Link>
        </div>
      </div>
      <div className="grey-bg"style={{height: "70vh", width: "30rem"}}></div>
    </div>
    </>
  )
}

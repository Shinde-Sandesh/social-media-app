export function PostPage(){
  return(
    <>
      <div className="container" style={{position: "relative;"}}>
      <nav className="white-bg">
        <div className="p-s pl-xxl txt-m ml-m">
          <a href="../../index.html">
            <span className="primary-color">My</span>Website
          </a>
        </div>
      </nav>
      <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <a href="">
                <i className="bi bi-house"></i> &nbsp;
                <span>Home</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../explore/explore.html">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../bookmarks/bookmark.html">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../profile/profile.html">
                <i className="bi bi-person"></i> &nbsp;
                <span>Profile</span>
              </a>
            </div>
            <button
              className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"
            >
              Create New Post
            </button>
          </div>
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
      <main className="mr-l h-full white-bg">
        <h3 className="pt-s ml-s">
          <i className="bi bi-arrow-left-short pr-s"></i>Post
        </h3>
        <div className="white-bg p-xs">
          <div className="flex flex-column nowrap p-xs">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: 1}}></div>
              <div className="flex flex-row flex-align-center flex-space-between w-full">
                <div className="flex flex-column">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color">@tanaypratap</p>
                </div>
                <p className="">∙∙∙</p>
              </div>
            </div>
            <div>
              <p className="pr-s pt-xs txt-m">
                Non programmers on my timeline. Attention. <br />
                <br />
                After placing 100+ programmers i in top Indian startups, I am
                thinking of coming up with a program for business roles as well.
                <br />
                <br />
                Interested in helping me build this course? Join the telegram
                group (in next tweet)
              </p>
              <p className="grey-color mt-s txt-s">
                12:11 AM <span className="pl-xs">•</span>
                <span className="pl-xs">Oct 11, 2021</span>
              </p>
              <div className="w-full mt-s" style={{height: "1px", backgroundColor : "rgb(206, 206, 206)"}}></div>
              <p className="mt-s fw-bold">4 Likes</p>
              <div className="w-full mt-s" style={{height: "1px", backgroundColor : "rgb(206, 206, 206)"}}></div>
              <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pl-s pr-s flex-align-center">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" style={{height: "1px", backgroundColor : "rgb(206, 206, 206)"}}></div>
        <div className="flex p-s">
          <div className="grey-bg br-full width-xl height-xl p-xs mr-s" style={{aspectRatio: 1}}></div>
          <input type="text" className="lynx-gray-bg border-none outline-transparent w-full mr-xs p-xs " style={{backgroundColor: "rgb(242, 242, 242)"}} placeholder="Comment your reply" />
          <button className="primary-bg secondary-color border-none outline-transparent pr-xl pl-xl">Post</button>
        </div>
        <div className="w-full" style={{height: "1px", backgroundColor : "rgb(206, 206, 206)"}}></div>
        <div className="white-bg  p-xs mt-s">
          <div className="flex flex-row nowrap p-xs w-full">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio: 1}}></div>
            <div>
              <div className="flex flex-row flex-align-center  flex-space-between">
                <div className="flex flex-column">
                  <div className="flex flex-row">
                    <p className="fw-bold">Ashwin Khode</p>
                    <p className="grey-color pl-xs">
                      @ashwin4real <span className="pl-xs">•</span>
                      <span className="pl-xs">1m</span>
                    </p>
                  </div>
                  <p className="lynx-gray-color">Replying to <span className="primary-color">@tanaypratap</span></p>
                </div>
                <p className="">∙∙∙</p>
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
        </div>
      </main>
      <aside className="mt-xl mr-xxl sidebar2">
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input
            type="search"
            name="search-bar"
            className="search-bar border-none outline-transparent p-s width-16"
            placeholder="Search Posts, People, Anything"
          />
        </div>
        <div className="white-bg">
          <div
            className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s"
          >
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
    </>
  )
}
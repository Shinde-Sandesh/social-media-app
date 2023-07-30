import Link from 'react-router-dom';

export function Navbar(){
  return(
    <>
      <nav className="white-bg">
        <div className="p-s pl-xxl txt-m ml-m">
          <Link to = "/home">
            <span className="primary-color">My</span>Website
          </Link>
        </div>
      </nav>
    </>
  )
}

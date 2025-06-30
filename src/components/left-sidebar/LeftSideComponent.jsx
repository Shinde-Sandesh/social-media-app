import { NavLink } from 'react-router-dom';
import './LeftSideComponent.css'

export function LeftSideComponent() {
  const user = JSON.parse(localStorage.getItem('loginItems'));

  const linkClass = ({ isActive }) => `fw-semibold ${isActive ? 'active-link' : 'black-color'}`;

  return (
    <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
      <div className="flex flex-column flex-space-between sidebar">
        <div>
          <div className='margin-added'>
            <NavLink to="/home" className={linkClass}>
              <i className="bi bi-house"></i> &nbsp;
              <span className="fw-bold">Home</span>
            </NavLink>
          </div>
          <div className='margin-added'>
            <NavLink to="/explore" className={linkClass}>
              <i className="bi bi-rocket"></i> &nbsp;
              <span>Explore</span>
            </NavLink>
          </div>
          <div className='margin-added'>
            <NavLink to="/bookmark" className={linkClass}>
              <i className="bi bi-bookmark"></i> &nbsp;
              <span>Bookmark</span>
            </NavLink>
          </div>
          <div className='margin-added'>
            <NavLink to="/profile" className={linkClass}>
              <i className="bi bi-person"></i> &nbsp;
              <span>Profile</span>
            </NavLink>
          </div>

          <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
            Create New Post
          </button>
        </div>

        <div className="flex flex-space-between flex-align-center">
          <div className="flex">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column ml-xs">
              <div className="fw-bold">
                {user?.user?.firstName} {user?.user?.lastName}
              </div>
              <div className="fw-light grey-color">@{user?.user?.username}</div>
            </div>
          </div>
          <div className="grey-color fw-bold">...</div>
        </div>
      </div>
    </aside>
  );
}

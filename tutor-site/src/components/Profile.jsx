import React from "react";
import { Link } from "react-router-dom";
// import "../assets/style.css"; // Adjust the path if needed

function Profile() {
  return (
    <>
      <header className="header">
        <section className="flex">
          <Link to="/" className="logo">
            Education
          </Link>

          <form action="/search" method="post" className="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxLength="100"
            />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>

          <div className="profile">
            <img src="/images/pic-1.jpg" className="image" alt="Profile" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>
            <Link to="/profile" className="btn">
              view profile
            </Link>
            <div className="flex-btn">
              <Link to="/login" className="option-btn">
                login
              </Link>
              <Link to="/register" className="option-btn">
                register
              </Link>
            </div>
          </div>
        </section>
      </header>

      <aside className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src="/images/pic-1.jpg" className="image" alt="Profile" />
          <h3 className="name">shaikh anas</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">
            view profile
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/">
            <i className="fas fa-home"></i>
            <span>home</span>
          </Link>
          <Link to="/about">
            <i className="fas fa-question"></i>
            <span>about</span>
          </Link>
          <Link to="/courses">
            <i className="fas fa-graduation-cap"></i>
            <span>courses</span>
          </Link>
          <Link to="/teachers">
            <i className="fas fa-chalkboard-user"></i>
            <span>teachers</span>
          </Link>
          <Link to="/contact">
            <i className="fas fa-headset"></i>
            <span>contact us</span>
          </Link>
        </nav>
      </aside>

      <section className="user-profile">
        <h1 className="heading">your profile</h1>

        <div className="info">
          <div className="user">
            <img src="/images/pic-1.jpg" alt="User" />
            <h3>shaikh anas</h3>
            <p>student</p>
            <Link to="/update" className="inline-btn">
              update profile
            </Link>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="flex">
                <i className="fas fa-bookmark"></i>
                <div>
                  <span>4</span>
                  <p>saved playlist</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">
                view playlists
              </Link>
            </div>

            <div className="box">
              <div className="flex">
                <i className="fas fa-heart"></i>
                <div>
                  <span>33</span>
                  <p>videos liked</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">
                view liked
              </Link>
            </div>

            <div className="box">
              <div className="flex">
                <i className="fas fa-comment"></i>
                <div>
                  <span>12</span>
                  <p>videos comments</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">
                view comments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} by <span>mr. web designer</span> | all
        rights reserved!
      </footer>
    </>
  );
}

export default Profile;

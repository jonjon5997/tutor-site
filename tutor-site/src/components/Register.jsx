import React from "react";
// import './style.css'; // Ensure this path is correct
import "@fortawesome/fontawesome-free/css/all.min.css";

const Register = () => {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <a href="/home" className="logo">
            Education
          </a>

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
            <img src="images/pic-1.svg" className="image" alt="Profile" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>
            <a href="/profile" className="btn">
              view profile
            </a>
            <div className="flex-btn">
              <a href="/login" className="option-btn">
                login
              </a>
              <a href="/register" className="option-btn">
                register
              </a>
            </div>
          </div>
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src="images/pic-1.svg" className="image" alt="Profile" />
          <h3 className="name">shaikh anas</h3>
          <p className="role">student</p>
          <a href="/profile" className="btn">
            view profile
          </a>
        </div>

        <nav className="navbar">
          <a href="/home">
            <i className="fas fa-home"></i>
            <span>home</span>
          </a>
          <a href="/about">
            <i className="fas fa-question"></i>
            <span>about</span>
          </a>
          <a href="/courses">
            <i className="fas fa-graduation-cap"></i>
            <span>courses</span>
          </a>
          <a href="/teachers">
            <i className="fas fa-chalkboard-user"></i>
            <span>teachers</span>
          </a>
          <a href="/contact">
            <i className="fas fa-headset"></i>
            <span>contact us</span>
          </a>
        </nav>
      </div>

      <section className="form-container">
        <form method="post" encType="multipart/form-data">
          <h3>register now</h3>
          <p>
            your name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
            maxLength="50"
            className="box"
          />
          <p>
            your email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
          />
          <p>
            your password <span>*</span>
          </p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
          />
          <p>
            confirm password <span>*</span>
          </p>
          <input
            type="password"
            name="c_pass"
            placeholder="confirm your password"
            required
            maxLength="20"
            className="box"
          />
          <p>
            select profile <span>*</span>
          </p>
          <input type="file" accept="image/*" required className="box" />
          <input
            type="submit"
            value="register new"
            name="submit"
            className="btn"
          />
        </form>
      </section>

      <footer className="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
        reserved!
      </footer>
    </div>
  );
};

export default Register;

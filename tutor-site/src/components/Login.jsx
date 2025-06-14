import React from "react";
// import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faSun,
  faTimes,
  faHome,
  faQuestion,
  faGraduationCap,
  faChalkboardUser,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="header">
    <section className="flex">
      <a href="/home" className="logo">
        Education
      </a>

      <form action="search.html" method="post" className="search-form">
        <input
          type="text"
          name="search_box"
          required
          placeholder="search courses..."
          maxLength="100"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className="icons">
        <div id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div id="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div id="user-btn">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div id="toggle-btn">
          <FontAwesomeIcon icon={faSun} />
        </div>
      </div>

      <div className="profile">
        <img src="images/pic-1.jpg" className="image" alt="" />
        <h3 className="name">shaikh anas</h3>
        <p className="role">studen</p>
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
);

const Sidebar = () => (
  <div className="side-bar">
    <div id="close-btn">
      <FontAwesomeIcon icon={faTimes} />
    </div>

    <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt="" />
      <h3 className="name">shaikh anas</h3>
      <p className="role">studen</p>
      <a href="/profile" className="btn">
        view profile
      </a>
    </div>

    <nav className="navbar">
      <a href="/home">
        <FontAwesomeIcon icon={faHome} />
        <span>home</span>
      </a>
      <a href="/about">
        <FontAwesomeIcon icon={faQuestion} />
        <span>about</span>
      </a>
      <a href="/courses">
        <FontAwesomeIcon icon={faGraduationCap} />
        <span>courses</span>
      </a>
      <a href="/teachers">
        <FontAwesomeIcon icon={faChalkboardUser} />
        <span>teachers</span>
      </a>
      <a href="/contact">
        <FontAwesomeIcon icon={faHeadset} />
        <span>contact us</span>
      </a>
    </nav>
  </div>
);

const LoginForm = () => (
  <section className="form-container">
    <form action="" method="post" encType="multipart/form-data">
      <h3>login now</h3>
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
      <input type="submit" value="login now" name="submit" className="btn" />
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
    reserved!
  </footer>
);

const Login = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <LoginForm />
      <Footer />
      {/* Optional custom JS here if needed */}
    </div>
  );
};

export default Login;

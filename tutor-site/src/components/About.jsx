import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <header className="header">
        <section className="flex">
          <a href="/home" className="logo">
            Educa.
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
            <img src="images/pic-1.jpg" className="image" alt="profile" />
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
          <img src="images/pic-1.jpg" className="image" alt="profile" />
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

      <section className="about">
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="about" />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <a href="/courses" className="inline-btn">
              our courses
            </a>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-briefcase"></i>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student's reviews</h1>
        <div className="box-container">
          {[2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num} className="box">
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <div className="student">
                <img src={`images/pic-${num}.jpg`} alt="student" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    {[1, 2, 3, 4].map((i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
        reserved!
      </footer>
    </>
  );
};

export default About;

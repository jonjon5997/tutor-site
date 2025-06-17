import React from "react";
// import '../styles/style.css'; // Make sure this file exists and matches your CSS

const Playlist = () => {
  return (
    <>
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
            <img src="/images/pic-1.svg" className="image" alt="" />
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
          <img src="/images/pic-1.svg" className="image" alt="" />
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

      <section className="playlist-details">
        <h1 className="heading">playlist details</h1>

        <div className="row">
          <div className="column">
            <form className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark"></i> <span>save playlist</span>
              </button>
            </form>

            <div className="thumb">
              <img src="/images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
          </div>

          <div className="column">
            <div className="tutor">
              <img src="/images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div className="details">
              <h3>complete HTML tutorial</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate.
              </p>
              <a href="/teacher_profile" className="inline-btn">
                view profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">playlist videos</h1>

        <div className="box-container">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <a key={num} className="box" href="/watch-video">
              <i className="fas fa-play"></i>
              <img src={`/images/post-1-${num}.png`} alt={`Part ${num}`} />
              <h3>complete HTML tutorial (part 0{num})</h3>
            </a>
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

export default Playlist;

import React from "react";
import { Link } from "react-router-dom";
// import "../styles/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function WatchVideo() {
  return (
    <>
      <header className="header">
        <section className="flex">
          <Link to="/home" className="logo">
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
            <img src="/images/pic-1.svg" className="image" alt="profile" />
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

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src="/images/pic-1.svg" className="image" alt="profile" />
          <h3 className="name">shaikh anas</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">
            view profile
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/home">
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
      </div>

      <section className="watch-video">
        <div className="video-container">
          <div className="video">
            <video
              src="/images/vid-1.mp4"
              controls
              poster="/images/post-1-1.png"
              id="video"
            ></video>
          </div>
          <h3 className="title">complete HTML tutorial (part 01)</h3>
          <div className="info">
            <p className="date">
              <i className="fas fa-calendar"></i>
              <span>22-10-2022</span>
            </p>
            <p className="date">
              <i className="fas fa-heart"></i>
              <span>44 likes</span>
            </p>
          </div>
          <div className="tutor">
            <img src="/images/pic-2.jpg" alt="tutor" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <form method="post" className="flex">
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
            <button type="button">
              <i className="far fa-heart"></i>
              <span>like</span>
            </button>
          </form>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            labore ratione, hic exercitationem mollitia obcaecati culpa dolor
            placeat provident porro. Aliquid iure autem non fugit sint. A, sequi
            rerum architecto dolor fugiat illo, iure velit nihil laboriosam
            cupiditate voluptatum facere cumque nemo!
          </p>
        </div>
      </section>

      <section className="comments">
        <h1 className="heading">5 comments</h1>

        <form className="add-comment">
          <h3>add comments</h3>
          <textarea
            name="comment_box"
            placeholder="enter your comment"
            required
            maxLength="1000"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="add comment"
            className="inline-btn"
            name="add_comment"
          />
        </form>

        <h1 className="heading">user comments</h1>

        <div className="box-container">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div className="box" key={index}>
              <div className="user">
                <img src={`/images/pic-${index}.jpg`} alt={`User ${index}`} />
                <div>
                  <h3>{index === 1 ? "shaikh anas" : "john deo"}</h3>
                  <span>22-10-2022</span>
                </div>
              </div>
              <div className="comment-box">
                {index === 1
                  ? "this is a comment from shaikh anas"
                  : [
                      "awesome tutorial! keep going!",
                      "amazing way of teaching! thank you so much!",
                      "loved it, thanks for the tutorial!",
                      "this is what I have been looking for! thank you so much!",
                      "thanks for the tutorial! how to download source code file?",
                    ][index - 2]}
              </div>
              {index === 1 && (
                <form className="flex-btn">
                  <input
                    type="submit"
                    value="edit comment"
                    name="edit_comment"
                    className="inline-option-btn"
                  />
                  <input
                    type="submit"
                    value="delete comment"
                    name="delete_comment"
                    className="inline-delete-btn"
                  />
                </form>
              )}
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
}

export default WatchVideo;

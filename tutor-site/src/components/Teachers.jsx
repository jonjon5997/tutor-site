import React from "react";
// import "./Teachers.css"; // Link your CSS or use module CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faUser,
  faSun,
  faTimes,
  faHome,
  faQuestion,
  faGraduationCap,
  faChalkboardUser,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const teachersData = [
  { img: "images/pic-2.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-3.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-4.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-5.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-6.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-7.jpg", name: "john deo", role: "developer" },
  { img: "images/pic-8.jpg", name: "john deo", role: "developer" },
];

const Teachers = () => {
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
            <h3 className="name">Jonathan Sanfilippo</h3>
            <p className="role">Student</p>
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
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <div className="profile">
          <img src="images/pic-1.jpg" className="image" alt="" />
          <h3 className="name">Jonathan Sanfilippo</h3>
          <p className="role">Student</p>
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

      <section className="teachers">
        <h1 className="heading">expert teachers</h1>

        <form action="" method="post" className="search-tutor">
          <input
            type="text"
            name="search_box"
            placeholder="search tutors..."
            required
            maxLength="100"
          />
          <button type="submit" name="search_tutor">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="box-container">
          <div className="box offer">
            <h3>become a tutor</h3>
            <p>Learn how you can sign up to be a tutor!</p>
            <a href="/register" className="inline-btn">
              get started
            </a>
          </div>

          {teachersData.map((teacher, index) => (
            <div className="box" key={index}>
              <div className="tutor">
                <img src={teacher.img} alt="" />
                <div>
                  <h3>{teacher.name}</h3>
                  <span>{teacher.role}</span>
                </div>
              </div>
              <p>
                total playlists : <span>4</span>
              </p>
              <p>
                total videos : <span>18</span>
              </p>
              <p>
                total likes : <span>1208</span>
              </p>
              <a href="/teacher_profile" className="inline-btn">
                view profile
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        &copy; <span>{new Date().getFullYear()}</span> by{" "}
        <span>Jonathan Sanfilippo</span> | all rights reserved!
      </footer>
    </>
  );
};

export default Teachers;

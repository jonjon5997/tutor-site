import React from "react";
import { Link } from "react-router-dom";
// import "../css/style.css";

const coursesData = [
  {
    id: 1,
    tutorImg: "pic-2.jpg",
    thumbImg: "thumb-1.png",
    title: "complete HTML tutorial",
  },
  {
    id: 2,
    tutorImg: "pic-3.jpg",
    thumbImg: "thumb-2.png",
    title: "complete CSS tutorial",
  },
  {
    id: 3,
    tutorImg: "pic-4.jpg",
    thumbImg: "thumb-3.png",
    title: "complete JS tutorial",
  },
  {
    id: 4,
    tutorImg: "pic-5.jpg",
    thumbImg: "thumb-4.png",
    title: "complete Bootstrap tutorial",
  },
  {
    id: 5,
    tutorImg: "pic-6.jpg",
    thumbImg: "thumb-5.png",
    title: "complete JQuery tutorial",
  },
  {
    id: 6,
    tutorImg: "pic-7.jpg",
    thumbImg: "thumb-6.png",
    title: "complete SASS tutorial",
  },
  {
    id: 7,
    tutorImg: "pic-8.jpg",
    thumbImg: "thumb-7.png",
    title: "complete PHP tutorial",
  },
  {
    id: 8,
    tutorImg: "pic-9.jpg",
    thumbImg: "thumb-8.png",
    title: "complete MySQL tutorial",
  },
  {
    id: 9,
    tutorImg: "pic-1.jpg",
    thumbImg: "thumb-9.png",
    title: "complete React tutorial",
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <h1 className="heading">our courses</h1>
      <div className="box-container">
        {coursesData.map(({ id, tutorImg, thumbImg, title }) => (
          <div className="box" key={id}>
            <div className="tutor">
              <img src={`/images/${tutorImg}`} alt="tutor" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src={`/images/${thumbImg}`} alt="course thumb" />
              <span>10 videos</span>
            </div>
            <h3 className="title">{title}</h3>
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

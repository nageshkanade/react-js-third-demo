import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./About.module.scss";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";

const About = () => {
  const [student, setStudent] = useState("");
  const [visible, setVisible] = useState(false);
  console.log(student);
  // useEffect(() => {
  //   setStudent('rajesh')
  // }, []);

  const changeName = () => {
    setStudent("Dharm");
  };

  const nameFlag = () => {
    if (visible) {
      setVisible(false);
      setStudent("nagesh");
      // console.log(student);
    } else {
      setVisible(true);
      setStudent("dharm");
      // console.log(student);
    }
  };

  console.log(visible);

  return (
    <>
      <Header />
      <div className={style.About}>
        <h1>This is About Page {visible ? student : student}</h1>

        <button className="btn btn-warning" onClick={nameFlag}>
          Click Me
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            changeName();
          }}
        >
          SUBMIT
        </button>
      </div>
      <Footer />
    </>
  );
};

export default About;

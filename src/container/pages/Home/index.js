import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Home.module.scss";
import "./Home.module.scss";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";

const Home = () => {
  // const[studentDetaile]=useState(['Dharm','Raj','Gani']); // this is array

  // const[studentDetaile]=useState({'D':'Dharm','R':'Raj','G':'Gani'}); // This is obejct

  const [studentDetaile, setStudentDetails] = useState("Jay Hanuman"); // This is first condition
  // const [Name,setName]=useState('Rajesh kanade'); // This is second condition
  console.log(studentDetaile);

  // const x=true;
  // useEffect(()=>{
  //   if(x===true){
  //     // setStudentDetails(100)
  //     console.log('This is studentDetaile :=>',studentDetaile); // ....studentDetails

  //     // console.log('This is Name session :->',Name); // ...rajesh kanade
  //   }
  // })
  useEffect(() => {
    setStudentDetails("krushna....123");
  },[]);

  const profile = () => {
    console.log("profile......calling..");
    setStudentDetails("Jay Shree Ram.....");
  };

  // useEffect(()=>{
  //   console.log('useEffect calling....!');
  //   profile();
  // },[]);

  // const profile=()=>{
  //   console.log('funtion calling....!')
  // }
  return (
    <>
      <div>
        <Header />
      </div>
      {/* inline +bootstrap */}
      <div className={`${style.Home} `}>
        {/* bootstrap */}
        <h1 className="text-primary">This is Home Page</h1><br></br>
        <h1>{studentDetaile}</h1>
        <button className=" btn btn-success" onClick={profile}>
          Submit
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

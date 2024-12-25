import React from "react";
import { useEffect,useState } from "react";
import style from "./Service.module.scss";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Card from '../../../component/Card';

const Service = () => {


const [studentDetails,setStudentDetails]=useState()
console.log('student details' , studentDetails)

useEffect(() => {
  console.log("hello from useEffect")
  setStudentDetails(student_Details)

}, [])
  const student_Details=[
  {'name':'raj','Mob':123456987,'Email':'Rak@gmail.com'},
  {'name':'Nagu','Mob':123456987,'Email':'Nagu@gmail.com'},
  {'name':'Dharm','Mob':123456987,'Email':'Dharm@gmail.com'},
  {'name':'Nayan','Mob':123456987,'Email':'Nayan@gmail.com'},
  {'name':'Gani','Mob':123456987,'Email':'Gani@gmail.com'},
  
];



  return (
    <>
      <Header />
      <div className={style.Service}>
                <Card studentDetails={student_Details} />
        {/* <h1>This is Service Page</h1> */}
        {/* <div className="row">
        
              {student_Details.map((item,index)=>{
           return   <div className="col-md-3">
            <div className="card">
              <div className="card-body bg-black text-white " style={{ border: "3px solid white" }} >
                <p>Name :<span>{item.name}</span></p>
                <p>Mob :<span>{item.Mob}</span></p>
                <p>Email :<span>{item.Email}</span></p>
                
                </div>
                </div>
              </div>
              })}
          
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Service;

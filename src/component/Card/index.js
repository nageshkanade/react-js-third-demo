import React from "react";
import style from "./Card.module.scss";

const Card = ({studentDetails}) => {

  console.log('this is from cart : ' , studentDetails)
  console.log(studentDetails.map((item)=>{
    return item.name;
  }))
  return <>
  
  <div className="row">      
    {studentDetails.map((item,index)=>{
      return ( <div className="col-md-3" key={index}>
        <div className="card">
          <div className="card-body bg-black text-white " style={{ border: "3px solid white" }} >
          <p>Name :<span>{item.name}</span></p>
          <p>Mob :<span>{item.Mob}</span></p>
          <p>Email :<span>{item.Email}</span></p>
             </div>
          </div>
        </div>);
        })}
  </div>
  </>;
};

export default Card;

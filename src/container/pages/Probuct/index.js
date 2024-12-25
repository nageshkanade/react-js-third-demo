import React from "react";
import style from'./Probuct.module.scss';
import { useEffect,useState } from "react";
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';


const Product = () => {

  const [footerName,setFooterName]=useState('Developer Guru'); /// This is props

  // useEffect(()=>{
  //   setFooterName('Hello Footer')
  // },[])

  const upData=()=>{
    setFooterName('Microsoft')
  }

    return (
      <>
        <Header />
        <div className={style.Product}>
          <h1>This is Product Page &nbsp;</h1>
          <button className="btn btn-primary" onClick={()=>{upData()}}>Hello</button>
        </div>
        <Footer footerName={footerName} />
      </>
    );
  };
  
  export default Product;
import React from "react";
import { useEffect,useState } from "react";
import style from'./Footer.module.scss'

const Footer=(footerName)=>{
    return<div className={style.Footer}>
        <h2>This is Footer &nbsp;{footerName.footerName}</h2>
    </div>
}

export default Footer;


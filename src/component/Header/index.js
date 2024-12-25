import React from 'react';
import style  from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header=()=>{
    return <div className={style.Header_Nav}>
        <div className={style.Header_First}>
            <h1>Developer Guru</h1>
        </div>
        <div className={style.Header_Second}>
            <ul className={style.Nav}>
                <li><Link to='/' className='link '>HOME</Link></li>
                <li><Link to='/About' className='link'>ABOUT</Link></li>
                <li><Link to='/Service' className='link'>SERIVCE</Link></li>
                <li><Link to='/Probuct' className='link'>PROBUCT</Link></li>
               
            </ul>
        </div>
    </div>
}

export default Header;

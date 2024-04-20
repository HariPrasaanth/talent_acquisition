import React from 'react'
import './leftbar.scss';
import Icon1 from "../../assets/sidebar_icons/1.png";
import Icon2 from "../../assets/sidebar_icons/2.png";
import Icon3 from "../../assets/sidebar_icons/3.png";
import Icon4 from "../../assets/sidebar_icons/4.png";
import Icon5 from "../../assets/sidebar_icons/5.png";
import Icon6 from "../../assets/sidebar_icons/6.png";
import Icon7 from "../../assets/sidebar_icons/7.png";
import Icon8 from "../../assets/sidebar_icons/8.png";
import Icon9 from "../../assets/sidebar_icons/9.png";

const Leftbar = () => {
  return (
    <div className='leftbar'>
        <div className='container'>
        <img src={Icon1} alt='' />
        <img src={Icon2} alt='' />
        <img src={Icon3} alt='' />
        <img src={Icon4} alt='' />
        <img src={Icon5} alt='' />
        <img src={Icon6} alt='' />
        <img src={Icon7} alt='' />
        <img src={Icon8} alt='' />
        <img src={Icon9} alt='' />
        </div>
    </div>
  )
}

export default Leftbar
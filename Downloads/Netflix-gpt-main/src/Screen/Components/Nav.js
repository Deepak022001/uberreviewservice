import React, { useState,useEffect } from 'react'
import './Nav.css'
function Nav () {

  const[show,setshow]=useState(false);
  // function for transition navbar
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      setshow(true);
    }
    else{
      setshow(false);
    }
  }

  // useEffect
  useEffect(function(){
    window.addEventListener("scroll",transitionNavBar);
    return function(){
    window.removeEventListener('scroll',transitionNavBar)
    }
  },[]) ;


  return (
    <div>
    <div className={`nav ${show &&'nav_black'}`}>
    <div className="nav_contents">
    <img 
      className='nav_logo '
      src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />

      <img 
      className='nav_avatar'
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
    </div>

    </div>
    </div>
  )
}

export default Nav;
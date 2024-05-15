import React from 'react'
import Social from './Social'
import "./Home.css";
import Data from './Data';
import ScrolDown from './ScrolDown';



function home() {
  return (
    <div className='home_section' id='home'>
      <div className="home_container container grid">
        <div className="home_content grid" >
          <Social/>
          <div className="home_img"></div>
          <Data/>
        </div>
       <ScrolDown/>
      </div>
      
    </div>
  )
}

export default home

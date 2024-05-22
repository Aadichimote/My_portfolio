import React from 'react'
import Social from './Social'
import "./Home.css";
import Data from './Data';




function home() {
  return (
    <section className='homesection' id='home'>
      <div className="home__container container grid">
        <div className="home__content grid" >
          <Social/>
          <div className="home__img"></div>
          <Data/>
          
        </div>
          
       
      </div>
      
    </section>
  )
}

export default home

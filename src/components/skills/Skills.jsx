import React from 'react'
import"./Skills.css"
import Frontend from "./Frontend";
import Tolls from "./Tolls"

function Skills() {
  return (
    <section className="skills section" id='skills'>
        <h2 className="skills__title__out">Skills</h2>
 <div className="skills__container container grid">
<Frontend/>
<Tolls/>
 </div>
    </section>
     )
}

export default Skills

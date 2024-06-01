import React from 'react'
import educate from '../assets/educate.png'

const Education = () => {
  return (
    <div style={{backgroundColor: "#FEFAF6",marginTop: '-25px',marginBottom:'25px'}}>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}><u>Education</u></h1>
      <div style={{display:'inline-flex',paddingLeft:'25vh',gap:'20vh'}}>
        <div>
            <img src={educate} alt='loading' />
        </div>
        <div >
          <h2>COLLEGE/SCHOOL</h2>
          <ul>
          <li><h3 style={{color:'red'}}>Chandigarh University</h3><span>May 2021 - Present</span> <br/> Bachelor of Engineering  8.04 CGPA</li>
          <li><h3 style={{color:'red'}}>Lucknow Public School & College</h3><span>Mar 2020 - Apr 2021</span><br/> Intermediate  81.2%</li>
          <li><h3 style={{color:'red'}}>St.Xavier's School</h3><span>Mar 2018 - Apr 2019</span><br/> Matriculation  81.3%</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education

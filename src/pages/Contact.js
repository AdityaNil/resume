import React from 'react'
import conta from '../assets/conta.jpg'
const Contact = () => {
  return (
    <div style={styles.contact}>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}><u>Contact</u></h1>
      <div>
        <form style={{display:'grid',paddingLeft:"40rem",paddingTop:"4rem"}}>
          <input style={styles.input} type="text" placeholder='Name'></input>
          <input style={styles.input} type="mail" placeholder='Email'></input>
          <textarea style={styles.input} name="Text Here..." cols="0" rows="10"></textarea>
          <input style={styles.button} type="button" value="Send"></input> 
        </form>
      </div>    
    </div>
  )
}

const styles={
  contact:{
    backgroundImage: `url(${conta})`,
    paddingBottom: '93px',
    fontSize: '25px',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    height: '74.5vh', 
    marginTop:'-25px'
  },
  input:{
    width:'25%',
    padding:'1rem',
    borderRadius:'.5rem',
    border:'2px solid green',
    resize:'none',
    marginBottom:'1rem'
  },
  button:{
    olor:'black',
    width:'29%',
    fontSize:'25px',
    cursor: 'pointer',
    borderRadius:'10px',
  }
}

export default Contact

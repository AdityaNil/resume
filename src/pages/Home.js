import React from 'react'
import {useNavigate} from 'react-router-dom'
import background from '../assets/background.jpg'
const Home = () => {
  const Navigate = useNavigate()

  const handleclicksubmit = () => {
    Navigate('/About')
  }

  return (
        <div style={styles.home}>
            <h1 style={{textAlign:'center'}}>Hi,</h1>
            <h2 style={{textAlign:'center'}}>I'm <span style={{color:'#5AB2FF'}}>Aditya</span></h2>
            <h2 style={{textAlign:'center'}}>Web Developer</h2>
            <div style={styles.buttondiv}>
                <button style={styles.button} onClick={handleclicksubmit}>Let's Begin</button>
            </div>
        </div>
  )
}
const styles={
      home:{
        backgroundImage: `url(${background})`,
        paddingTop: '100px',
        fontSize: '25px',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '74.5vh', 
      },
       
      buttondiv:{
        display: 'flex',
        justifyContent: 'center'
      },
      button:{
        borderRadius: '12px',
        color: 'white',
        backgroundColor: 'green',
        padding: '10px 20px',
        border: 'none',
        cursor:'pointer',
        fontSize: '18px', 
      }
}
export default Home

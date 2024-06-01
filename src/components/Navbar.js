import React from 'react'
import { useNavigate} from 'react-router-dom'
const Navbar = () => {
  const Navigate=useNavigate()

  const clickabout = () =>{
    Navigate('/About')
  }
  const clickhome = () =>{
    Navigate('/')
  }
  const clickcertificate = () =>{
    Navigate('/certificates')
  }
  const clickeducation = () =>{
    Navigate('/education')
  }
  const clickcontact = () =>{
    Navigate('/contact')
  }

  return (
        <div style={styles.navbar}>
            <div style={styles.navbarname}>
                <h2>Aditya <span style={{color:'#5AB2FF'}}>Anand</span></h2>
            </div>
            <div style={styles.navbarcompo}>
                <h3 onClick={clickhome} style={{cursor:'pointer'}}>Home</h3>
                <h3 onClick={clickabout} style={{cursor:'pointer'}}>About</h3>
                <h3 onClick={clickcertificate} style={{cursor:'pointer'}}>Certificates</h3>
                <h3 onClick={clickeducation} style={{cursor:'pointer'}}>Education</h3>
                <h3 onClick={clickcontact} style={{cursor:'pointer'}}>Contact</h3>
            </div>
        </div>    
  )
}
const styles = {
    navbar: {
        display: 'flex',
        fontSize:'17px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '25px',
      },
      navbarname: {
        paddingLeft: '10px',
      },
      navbarcompo: {
        display: 'flex',
        paddingRight:'80px',
        gap: '50px',
      }
}

export default Navbar

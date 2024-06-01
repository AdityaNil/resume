import React from 'react'
import c1 from'../assets/c1.jpg'
import c2 from'../assets/c2.jpg'
import c3 from'../assets/c3.jpg'
import c4 from'../assets/c4.jpg'

const Certificates = () => {
  return (
    <div style={{backgroundColor: "#FEFAF6",marginTop: '-25px'}}>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}><u>Certificates</u></h1>
      <div style={styles.grid}>
          <img src={c1} alt="" style={styles.image}></img>
          <img src={c2} alt="" style={styles.image}></img>
          <img src={c3} alt="" style={styles.image}></img>
          <img src={c4} alt="" style={styles.image}></img>
      </div>
    </div>
  )
}

const styles = {
  image:{
    width: '70%',
    height: 'auto',
    border:'5px solid'
  },
  grid: {
    paddingLeft:"150px",
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100vh)',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export default Certificates

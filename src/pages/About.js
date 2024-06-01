import React from 'react';
import abtimg from '../assets/abtimg.jpg';
import resume from '../assets/resume.pdf';

const About = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Aditya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.about}>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}><u>About</u></h1>
      <div style={{ display: 'inline-flex', gap: '40px', marginTop: '20px' }}>
        <div>
          <img src={abtimg} alt='loading' style={styles.img}></img>
        </div>
        <div>
          <h2 style={{ fontSize: '25px'}}>Hi! I Am Aditya,</h2>
          <p style={{ fontSize: '20px' }}>
            A versatile, hardworking individual who is motivated to provide high-quality software products that meet or exceed a company's expectations. An attentive learner with the ability to explain technical concepts in an approachable manner. Possess a solid foundation in innovative problem-solving techniques and the capacity to multitask and set priorities in hectic, high-pressure situations.
          </p>
          <h2 style={styles.cv} onClick={download}>Download CV</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  about: {
    backgroundColor: "#FEFAF6",
    paddingLeft: '160px',
    paddingRight: '160px',
    marginTop: '-25px'
  },
  img: {
    height: '70vh',
    width: '70vh'
  },
  cv: {
    display: 'inline-flex',
    border: '3px solid #40A578',
    padding: '5px',
    cursor: 'pointer'
  }
};

export default About;

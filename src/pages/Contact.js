import React, { useEffect, useRef, useState } from 'react';
import {styled} from 'styled-components';
import conta from '../assets/conta.jpg';
import { device } from '../styles/Media';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    axios.get('https://ipinfo.io?token=4f4422d2d70199')
      .then(response => {
        setIpInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching IP info:', error);
      });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (ipInfo) {
      formData.append('ip', ipInfo.ip);
      formData.append('location', JSON.stringify(ipInfo));
    }

    emailjs.sendForm('service_qgid29t', 'template_sbpb32i', form.current, 'zQBILJmE152qrvA5i')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message');
        }
      );

    // Send data to backend
    axios.post(`http://localhost:5000/api/saveContact`, {
      name: formData.get('sender_name'),
      email: formData.get('from_name'),
      message: formData.get('message'),
      ip: ipInfo?.ip,
      location: ipInfo
    }).then(() => {
      console.log('Data saved to database');
      console.log(formData);
    }).catch(error => {
      console.error('Error saving data to database:', error);
    });
  };

  return (
    <StyledContact>
      <Heading><u>Contact</u></Heading>
      <Form ref={form} onSubmit={sendEmail}>
        <StyledInput type="text" name="sender_name" placeholder="Name" required />
        <StyledInput type="email" name="from_name" placeholder="Email" required />
        <StyledTextarea name="message" placeholder="Text Here..." required />
        <StyledButton type="submit" value="Send" />
      </Form>
    </StyledContact>
  );
};
const StyledContact = styled.div`
  background-image: url(${conta});
  background-size: cover;
  background-position: center;
  padding: 10vh 0;
  font-size: 4vh;
  min-height: 73.5vh;
  margin-top: -25px;

  @media ${device.tablet} {
    font-size: 3vh;
  }

  @media ${device.mobileL} {
    font-size: 3vh;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 8vh;
  margin-bottom: 4vh;

  @media ${device.tablet} {
    font-size: 6vh;
  }

  @media ${device.mobileL} {
    font-size: 4vh;
  }
`;

const Form = styled.form`
  display: grid;
  justify-items: center;
  gap: 2vh;
  margin: 0 auto;
  max-width: 60vw;

  @media ${device.tablet} {
    max-width: 80vw;
  }

  @media ${device.mobileL} {
    max-width: 90vw;
  }
`;

const StyledInput = styled.input`
  width: 25%;
  padding: 2vh;
  border-radius: 1vh;
  border: 0.3vh solid green;
  font-size: 2vh;

  @media ${device.tablet} {
    height: 5vh;
    width: 30vh;
  }

  @media ${device.mobileL} {
    height: 5vh;
    width: 30vh;
  }
`;

const StyledTextarea = styled.textarea`
  width: 25%;
  padding: 2vh;
  border-radius: 1vh;
  border: 0.3vh solid green;
  resize: none;
  font-size: 2vh;
  
  @media ${device.tablet} {
    height: 5vh;
    width: 30vh;
  }

  @media ${device.mobileL} {
    height: 5vh;
    width: 30vh;
  }
`;

const StyledButton = styled.input`
  width: 10%;
  font-size: 3vh;
  cursor: pointer;
  border-radius: 2vh;
  padding: 1vh;
  border: 0.3vh solid green;
  background-color: white;
  
  @media ${device.tablet} {
    height: 8vh;
    width: 15vh;
  }

  @media ${device.mobileL} {
    height: 8vh;
    width: 15vh;
  }
`;

export default Contact;
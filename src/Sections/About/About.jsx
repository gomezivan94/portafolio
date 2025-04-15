import React, { useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import {  ProfilePicture, TitleAboutSection } from '../../Components'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsGithub, BsLinkedin, BsSaveFill } from "react-icons/bs";
import { CvIvanGomez } from '../../assets/document';

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Container className="container-fluid" id='about'>
      <Row className="text-center align-items-center justify-content-center mt-5" >
        <Col xs="12" md="4" xl="6" className='py-5' data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000">
          <ProfilePicture/>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col md="4" xl="4" className='mt-2'>
              <a href="https://github.com/gomezivan94/" target="_blank"><BsGithub className='socialIcon'/></a>
              <a href="https://www.linkedin.com/in/ivanrgomez/" target="_blank"><BsLinkedin className='socialIcon'/></a>
              <a href={CvIvanGomez} download="cvIvanGomez.pdf"><BsSaveFill className='socialIcon'/></a> 
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="4" xl="6" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1000">
          <TitleAboutSection/>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default About
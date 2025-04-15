import React, { useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import {  ProfilePicture, TitleAboutSection } from '../../Components'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Container className="container-fluid" id='aboutSection' data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">
      <Row className="text-center align-items-center justify-content-center mt-5">
        <Col xs="12" md="4" xl="6" className='py-5'>
          <ProfilePicture/>
        </Col>
        <Col xs="12" md="4" xl="6">
        <TitleAboutSection/>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default About
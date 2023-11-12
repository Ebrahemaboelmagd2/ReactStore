import React from 'react'
import '../About/About.css'
import pic1 from '../../images/pexels-photo-2047905.webp'
import pic2 from '../../images/pexels-photo-2136243.webp'
import pic3 from '../../images/pexels-photo-306763.jpg'
import pic4 from '../../images/pexels-photo-343457.jpg'
import pic5 from '../../images/pexels-photo-682933.jpg'
import pic6 from '../../images/pexels-photo-792345.webp'
import pic7 from '../../images/pexels-photo-777001.webp'
import pic8 from '../../images/pexels-photo-341523.webp'
import { Col, Row } from 'react-bootstrap'
const About = () => {
  return (
    <Row xs={1} md={2} lg={3} className='g-3'>
      <Col className='pic1'>
        <img src={pic5}/>
      </Col>
      <div>
        <Col className='pic2'>
          <img src={pic2}/>
        </Col>
        <Col className='pic3'>
          <img src={pic3}/>
        </Col>
      </div>
      <div>
        <Col className='pic2'>
          <img src={pic6}/>
        </Col>
        <Col className='pic3'>
          <img src={pic1}/>
        </Col>
      </div>
      <div>
        
      </div>
    </Row>
  )
}

export default About
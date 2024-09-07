import React from 'react'
import './Newsletter.css'
import { Container, Row,Col } from 'reactstrap'
import maleTourist from  '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
   <>
      <section className='newsletter'>
        <Container>
          <Row>
            <Col lg='6'>
<div className="newsletter__content">
<h2 className="testimonial__title">Subscribe Us to get Useful information</h2>
<div className="newsletter__input">
    <input type='email' placeholder='Enter your Email address'/>
    <button className='btn newsletter__btn'>Subscribe</button>
</div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa impedit vitae? Sapiente, deserunt aperiam.</p>
    </div>             
            </Col>
            <Col lg='6'>
<div className="newsletter__img">
    <img src={maleTourist} alt="" />
    </div>            </Col>
          </Row>
        </Container>
      </section>
   </>
  )
}

export default NewsLetter

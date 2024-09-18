import React, { useState } from 'react'
import '../Style/login.css'
import { Container , Row , Col, Form , FormGroup , Button} from 'reactstrap'
import {Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {

  const [credentials , setCredentials]= useState({
    email:undefined,
    password:undefined,
})

  const handleChange = e => {
    setCredentials(perv=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick =e =>{
  e.preventDefault()
}

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>
              <From onSubmit={handleClick}>
                <FormGroup>
                  <input type="text" placeholder='email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Enter password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
              </From>
              <p>Don't have an account? <Link to='/register'> Create</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Login

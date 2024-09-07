import React from 'react'
import './common-solutions.css'
import { Container, Row , Col } from 'reactstrap'

const CommonSolution = ({title}) => {
  return (
    <section className='common__section'>
        <Container>
            <Row>
                <Col lg='12'>
                <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSolution

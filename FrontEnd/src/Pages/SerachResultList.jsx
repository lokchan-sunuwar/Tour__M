import React ,{useState}from 'react'
import CommonSection from './../Shared/CommonSolution'
import { Container, Row,Col } from 'reactstrap'
import {useLocation} from 'react-router-dom'
import TourCard from './../Shared/TourCard'
import NewsLetter from './../Shared/NewsLetter'
const SerachResultList = () => {
const location = useLocation()
const [data]= useState (location.state)


  return (
    <>
    <CommonSection title={"tour search result"}/>

    <section>
      <Container>
        <Row>
          {
            data.length ==0? <h4 className='text-center'>No Tour Found</h4>:data?.map(tour=> <Col lg='3' className='mb-4' key={tour._id}>{" "}<TourCard tour={tour}/>{" "}</Col>)
          }
        </Row>
      </Container>
    </section>
    <NewsLetter/>
    </>
  )
}

export default SerachResultList



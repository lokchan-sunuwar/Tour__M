import React, {useState, useEffect } from 'react'
import CommonSolution from '../Shared/CommonSolution'
import '../Style/tour.css'
import tourdata from '../assets/data/tours'
import TourCard from '../Shared/TourCard'
import SearchBar from '../Shared/SearchBar'
import NewsLetter from '../Shared/NewsLetter'
import { Container,Row,Col } from 'reactstrap'
const Tours = () => {
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage]=useState(0)

  useEffect(()=>{
    const pages=Math.ceil(5/4) //later we will use bkend data count
    setPageCount(pages)
  },[page]);
  return (
<>
<CommonSolution title={"All tours"}/>
<section>
  <Container>
    <Row>
      <SearchBar/>
    </Row>
  </Container>
</section>
<section className='pt-0'>
  <Container>
    <Row>
      {tourdata?.map(tour=><Col className='mb-4' lg='3' key ={tour.id}><TourCard tour={tour}/></Col>)}
      <Col lg='12'>
      <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
{[...Array(pageCount).keys()].map(number=>(
  <span key={number} onClick={()=>setPage(number)}
  className='{page===number?"active__page":""}'>{number+1}</span>
))}

      </div>
      
      </Col>
    </Row>
  </Container>
</section>
<NewsLetter/>
</>

  )
}

export default Tours
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Style/home.css';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../Shared/Subtitle';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial'
import NewsLetter from '../Shared/NewsLetter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content  ">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know before you go'} />
                  <img src={worldImg} alt="World Map" />
                </div>
                <h1>
                  Travelling opens the door to creating <span className="highlight"></span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut enim culpa ea autem tempore deserunt facere minus eum. Dolores fuga qui consequatur reiciendis libero quia? Ad, repellendus! Quasi, deserunt.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="Hero Image 01" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="Hero Video" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="Hero Image 02" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="feature__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ----end feature-- */}
      {/*exp section*/ }
      <section>
        <Container>
          <Row>
            <Col lg='6' className="mb-5">
              <Subtitle subtitle={'Exprience'} />
              <h2 className="exprience">With Our all Exprience<br/> we will serve you </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab incidunt magnam dicta sint.<br/> Voluptatem debitis molestias, sed ab, non, aperiam nihil ducimus expedita reprehenderit natus reiciendis culpa assumenda consequatur nam mollitia! Nisi odit e</p>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>15k+</span>
                  <h6>successfull Trip</h6>
                </div>
      
                <div className="counter__box">
                  <span>2.5k</span>
                  <h6>Regular client</h6>
                </div>
                <div className="counter__box">
                  <span>12+</span>
                  <h6>years of exprience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" srcset="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* -----gallery---- */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit Our Customers tour gallery</h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
            {/* -----testimonal---- */}
            <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Our Fan Love'} />
              <h2 className="testimonial__title">what our fans say about Us</h2>
            </Col>
            <Col lg='12'>
            <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
        <NewsLetter/>
    </>
  );
};

export default Home;

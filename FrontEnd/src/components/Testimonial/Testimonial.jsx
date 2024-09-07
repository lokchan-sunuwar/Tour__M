import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1, // Added to ensure each slide scrolls one at a time
        responsive: [
            {
                breakpoint: 1024, // For medium to large screens
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 768, // For tablets and smaller screens
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est laboriosam eaque nemo totam dignissimos commodi similique laudantium aliquid voluptatem.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} alt="Avatar 1" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Anil Doe</h6>
                        <p>Customers</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est laboriosam eaque nemo totam dignissimos commodi similique laudantium aliquid voluptatem.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} alt="Avatar 2" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Anil Doe</h6>
                        <p>Customers</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est laboriosam eaque nemo totam dignissimos commodi similique laudantium aliquid voluptatem.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} alt="Avatar 3" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Anil Doe</h6>
                        <p>Customers</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonial;

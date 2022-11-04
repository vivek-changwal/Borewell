import React from 'react'
import { ArrowLeft, ArrowRight, Person } from 'react-bootstrap-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Image1 from '../images/people1.jpeg'
import Image2 from '../images/people2.webp'
import Image3 from '../images/people3.webp'
const data = [
    {
        id: 1,
        name: "Juliet Jarvis",
        avatar: Image1,
        message:
            "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
        lorem:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    },
    {
        id: 2,
       name: "Michael D.",
        avatar: Image2,
        message:
            "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
        lorem:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    },
    {
        id: 3,
        name: "Juliet Wright",
        avatar: Image3,
        message:
            "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
        lorem:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
        rating: 4.5,

    },
]

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowLeft style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowRight style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {
    return (
        <section>
            <div className='container'>
                <div className='testimonail pt-5'>
                    <h1 className='text-uppercase mb-4 text-center heading' >TESTIMONIALS</h1>
                    <div className='row d-flex-center '>
                        <div className='text-center d-flex justify-content-center col-12 mb-5'>
                            <div className='card ' >
                                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                                    {
                                        data.map((value) => (
                                            <>
                                                <Image src={value.avatar} className="tm-people d-flex card-img-top  justify-content-center mx-auto text-center mt-5 mb-5" />
                                                <div class="card-body">
                                                    <p class="card-text mx-auto text-center">{value.lorem}</p>
                                                    <h5 class="card-title mx-auto text-center">{value.name}</h5>
                                                </div>
                                            </>
                                        ))
                                    }</Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;

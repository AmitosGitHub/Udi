import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Home1 from '../../assets/img/home1.jpeg'
import Home2 from '../../assets/img/home2.jpeg'
import Home3 from '../../assets/img/home3.jpeg'

export class HomeTools extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 10,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1824,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    }
    return (
      <section className="home-tools-carousel">
        <h3>home-tools</h3>
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <img src={Home1} />
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <img src={Home2} />
            </Link>
            <Link to={`/stay/explore/type/Beach`}>
              <img src={Home3} />
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <img src={Home1} />
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <img src={Home2} />
            </Link>
            <Link to={`/stay/explore/type/Beach`}>
              <img src={Home3} />
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <img src={Home1} />
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <img src={Home2} />
            </Link>
            <Link to={`/stay/explore/type/Beach`}>
              <img src={Home3} />
            </Link>
          </Slider>
        </div>
      </section>
    )
  }
}

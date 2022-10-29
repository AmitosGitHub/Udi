import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

import Men1 from '../../assets/img/shirt-men.jpeg'
import Men2 from '../../assets/img/shirt-men2.jpeg'
import Men3 from '../../assets/img/shirt-men3.jpeg'

export class MenFashion extends Component {
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
      <section className="men-fashion-carousel">
        <h3>men-fashion</h3>
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Men3} />
                <h4>Arctic</h4>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
    )
  }
}

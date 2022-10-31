import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Women } from '../../assets/img/criterias-icon/women.jpg'
import { Men } from '../../assets/img/criterias-icon/men.jpg'
import { Home } from '../../assets/img/criterias-icon/home.jpg'
import { Tech } from '../../assets/img/criterias-icon/tech.jpg'
import { Fitness } from '../../assets/img/criterias-icon/fitness.jpg'
import { Pet } from '../../assets/img/criterias-icon/pet.jpg'
import { Coat } from '../../assets/img/criterias-icon/coat.jpg'
import { Shoes } from '../../assets/img/criterias-icon/shoes.jpg'
import { Bag } from '../../assets/img/criterias-icon/bag.jpg'

export class CriteriasCarousel extends Component {
  // imgs =[Women ,Men ,Home, Tech ,Fitness, Pet, Coat ,Shoes ,Bag]
  imgs = [
    { imgUrl: Women, title: 'women' },
    { imgUrl: Men, title: 'men' },
    { imgUrl: Home, title: 'home' },
    { imgUrl: Tech, title: 'tech' },
    { imgUrl: Fitness, title: 'fitness' },
    { imgUrl: Pet, title: 'pet' },
    { imgUrl: Coat, title: 'coat' },
    { imgUrl: Shoes, title: 'shoes' },
    { imgUrl: Bag, title: 'bag' },
  ]

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
      <section className="criterias-filter">
        <Slider {...settings}>
          {this.imgs.map((item) => (
            <Link>
              <div className="content-criterias">
                <img src={item.imgUrl} />
                <h4>{item.title}</h4>
              </div>
            </Link>
          ))}
          {/* <Link>
            <div className="content-criterias">
              <BsHandbag />
              <h4>bags</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <MdSportsSoccer />
              <h4>sport</h4>
            </div>
          </Link>

          <Link>
            <div className="content-criterias">
              <GiSittingDog />
              <h4>pet</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <BiHome />
              <h4>home</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <TbShirt />
              <h4>men</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <GiConverseShoe />
              <h4>shoes</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <GiLargeDress />
              <h4>women</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <GiLargeDress />
              <h4>women</h4>
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <GiLargeDress />
              <h4>women</h4>
            </div>
          </Link> */}
        </Slider>
      </section>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BiHome } from 'react-icons/bi'
import { TbShirt } from 'react-icons/tb'
import { GiConverseShoe } from 'react-icons/gi'
import { GiLargeDress } from 'react-icons/gi'
import { BsHandbag } from 'react-icons/bs'
import { MdSportsSoccer } from 'react-icons/md'
import { GiSittingDog } from 'react-icons/gi'

export class CriteriasCarousel extends Component {
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
          <Link>
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
          </Link>
        </Slider>
      </section>
    )
  }
}

// export const CriteriasCarousel = () => {
//   return (
//     <section className="criterias-filter">
//       <ul>
//         <li>
//           <div className="content-criterias">
//             <BsHandbag />
//             <h4>bags</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <MdSportsSoccer />
//             <h4>sport</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <GiSittingDog />
//             <h4>pet</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <BiHome />
//             <h4>home</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <TbShirt />
//             <h4>men</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <GiConverseShoe />
//             <h4>shoes</h4>
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <GiLargeDress />
//             <h4>women</h4>
//           </div>
//         </li>
//       </ul>
//     </section>
//   )
// }

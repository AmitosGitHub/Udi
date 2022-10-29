import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Alo from '../../assets/img/company-logo/alo.jpeg'
import Asos from '../../assets/img/company-logo/asos.jpeg'
import Amzn from '../../assets/img/company-logo/amzn.jpeg'
import Aliexpress from '../../assets/img/company-logo/aliexpress.jpeg'
import Ebay from '../../assets/img/company-logo/ebay.jpeg'
import Terminalx from '../../assets/img/company-logo/terminalx.jpeg'
import Iherb from '../../assets/img/company-logo/iherb.jpeg'
import Next from '../../assets/img/company-logo/next.jpeg'

export class CompanyCarousel extends Component {
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
      <section className="company-filter">
        <Slider {...settings}>
          <Link>
            <div className="content-criterias">
              <img src={Terminalx} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Iherb} />
            </div>
          </Link>

          <Link>
            <div className="content-criterias">
              <img src={Amzn} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Ebay} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Amzn} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Asos} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Alo} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Next} />
            </div>
          </Link>
          <Link>
            <div className="content-criterias">
              <img src={Ebay} />
            </div>
          </Link>
        </Slider>
      </section>
    )
  }
}

// export const CompanyCarousel = () => {
//   return (
//     <section className="company-filter">
//       <ul>
//         <li>
//           <div className="content-criterias">
//             <img src={Ebay} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Next} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Alo} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Terminalx} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Aliexpress} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Iherb} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Amzn} />
//           </div>
//         </li>
//         <li>
//           <div className="content-criterias">
//             <img src={Asos} />
//           </div>
//         </li>
//       </ul>
//     </section>
//   )
// }

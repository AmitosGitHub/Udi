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
import Fre from '../../assets/img/company-logo/fre.jpeg'
import Ksp from '../../assets/img/company-logo/ksp.jpeg'
import Labeaute from '../../assets/img/company-logo/la-beaute.jpeg'
import Revolve from '../../assets/img/company-logo/revolve.jpeg'
import Yvesrocher from '../../assets/img/company-logo/yves-rocher.jpeg'

export class CompanyCarousel extends Component {
  render() {
    const companys = [
      { imgUrl: Alo, title: 'Alo' },
      { imgUrl: Asos, title: 'Asos' },
      { imgUrl: Amzn, title: 'Amzon' },
      { imgUrl: Aliexpress, title: 'Aliexpress' },
      { imgUrl: Ebay, title: 'Ebay' },
      { imgUrl: Terminalx, title: 'Terminalx' },
      { imgUrl: Iherb, title: 'Iherb' },
      { imgUrl: Next, title: 'Next' },
      { imgUrl: Fre, title: 'Fre' },
      { imgUrl: Ksp, title: 'Ksp' },
      { imgUrl: Labeaute, title: 'Labeaute' },
      { imgUrl: Yvesrocher, title: 'Yves Rocher' },
      { imgUrl: Revolve, title: 'Revolve' },
    ]
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
          {companys.map((item) => (
            <Link>
              <div className="content-criterias">
                <img src={item.imgUrl} />
              </div>
            </Link>
          ))}
          {/* <Link>
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
          </Link> */}
        </Slider>
      </section>
    )
  }
}

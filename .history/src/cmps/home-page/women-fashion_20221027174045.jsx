import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

import { GiSittingDog } from 'react-icons/gi'
import Women1 from '../../assets/img/women1.jpeg'
import Women2 from '../../assets/img/women2.jpeg'
import Women3 from '../../assets/img/women3.jpeg'
export class WomenFashion extends Component {
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
      <section className="container-carousel">
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Women1} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Women2} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Beach`}>
              <div className="content-carousel">
                <img src={Women3} />
                <h4>Beach</h4>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
    )
  }
}

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// //---------ICONS-------------

// import Women1 from '../../assets/img/women1.jpeg'
// import Women2 from '../../assets/img/women2.jpeg'
// import Women3 from '../../assets/img/women3.jpeg'

// export class WomenFashion extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 12,
//       slidesToScroll: 10,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1824,
//           settings: {
//             slidesToShow: 10,
//             slidesToScroll: 8,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 1100,
//           settings: {
//             slidesToShow: 8,
//             slidesToScroll: 8,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 6,
//             slidesToScroll: 6,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 650,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 550,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//           },
//         },
//       ],
//     }
//     return (
//       <section className="women-fashion-carousel">
//         <h3>women-fashion</h3>
//         <div className="main-carousel">
//           <Slider {...settings}>
//             <div className="div">
//               <Link to={`/stay/explore/type/Amazing pools`}>
//                 <img src={Women1} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Arctic`}>
//                 <img src={Women2} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Beach`}>
//                 <img src={Women3} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Amazing pools`}>
//                 <img src={Women1} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Arctic`}>
//                 <img src={Women2} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Beach`}>
//                 <img src={Women3} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Amazing pools`}>
//                 <img src={Women1} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Arctic`}>
//                 <img src={Women2} />
//               </Link>
//             </div>
//             <div className="div">
//               <Link to={`/stay/explore/type/Beach`}>
//                 <img src={Women3} />
//               </Link>
//             </div>
//           </Slider>
//         </div>
//       </section>
//     )
//   }
// }

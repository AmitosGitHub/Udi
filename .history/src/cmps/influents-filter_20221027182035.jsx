// import React from 'react'
// import { useEffect, useState, useRef } from 'react'
// // import { connect } from 'react-redux'
// import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

// export const InfluentsFilter = () => {
//   const data = [
//     {
//       fullname: 'Edgar',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
//       username: '75091963',
//       password: 'Edgar',
//       _id: '622f3401e36c59e6164fab4d',
//     },
//     {
//       fullname: 'Leo',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
//       username: '59985',
//       password: 'Leo',
//       _id: '622f3401e36c59e6164fab4e',
//     },
//     {
//       fullname: 'Amit',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
//       username: '3805403',
//       password: 'Margaux',
//       id: '3805403',
//       _id: '622f3401e36c59e6164fab4f',
//     },
//     {
//       fullname: 'Adi',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
//       username: '25851994',
//       password: 'Francine',
//       id: '25851994',
//       _id: '622f3401e36c59e6164fab50',
//     },
//     {
//       fullname: 'Neta',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
//       username: '1205536',
//       password: 'Winnie',
//       id: '1205536',
//       _id: '622f3401e36c59e6164fab51',
//     },
//     {
//       fullname: 'Roni',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
//       username: '33711606',
//       password: 'Erin',
//       id: '33711606',
//       _id: '622f3401e36c59e6164fab52',
//     },
//     {
//       fullname: 'Ori',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
//       username: '16833983',
//       password: 'Gustavo',
//       id: '16833983',
//       _id: '622f3401e36c59e6164fab53',
//     },
//     {
//       fullname: 'May',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
//       username: '18223142',
//       password: 'Fernanda',
//       id: '18223142',
//       _id: '622f3401e36c59e6164fab54',
//     },
//     {
//       fullname: 'Vered',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
//       username: '39214712',
//       password: 'Stephanie',
//       id: '39214712',
//       _id: '622f3401e36c59e6164fab55',
//     },
//     {
//       fullname: 'Shylie',
//       imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
//       username: '2537111',
//       password: 'Barbara',
//       id: '2537111',
//       _id: '622f3401e36c59e6164fab56',
//     },
//   ]

//   return (
//     <section className="influents-filter">
//       <ul>
//         {data.map((user) => (
//           <li>
//             <img src={user.imgUrl} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

export class InfluentsFilter extends Component {
  render() {
    const data = [
      {
        fullname: 'Edgar',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
        username: '75091963',
        password: 'Edgar',
        _id: '622f3401e36c59e6164fab4d',
      },
      {
        fullname: 'Leo',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
        username: '59985',
        password: 'Leo',
        _id: '622f3401e36c59e6164fab4e',
      },
      {
        fullname: 'Amit',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
        username: '3805403',
        password: 'Margaux',
        id: '3805403',
        _id: '622f3401e36c59e6164fab4f',
      },
      {
        fullname: 'Adi',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
        username: '25851994',
        password: 'Francine',
        id: '25851994',
        _id: '622f3401e36c59e6164fab50',
      },
      {
        fullname: 'Neta',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
        username: '1205536',
        password: 'Winnie',
        id: '1205536',
        _id: '622f3401e36c59e6164fab51',
      },
      {
        fullname: 'Roni',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
        username: '33711606',
        password: 'Erin',
        id: '33711606',
        _id: '622f3401e36c59e6164fab52',
      },
      {
        fullname: 'Ori',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
        username: '16833983',
        password: 'Gustavo',
        id: '16833983',
        _id: '622f3401e36c59e6164fab53',
      },
      {
        fullname: 'May',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
        username: '18223142',
        password: 'Fernanda',
        id: '18223142',
        _id: '622f3401e36c59e6164fab54',
      },
      {
        fullname: 'Vered',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
        username: '39214712',
        password: 'Stephanie',
        id: '39214712',
        _id: '622f3401e36c59e6164fab55',
      },
      {
        fullname: 'Shylie',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
        username: '2537111',
        password: 'Barbara',
        id: '2537111',
        _id: '622f3401e36c59e6164fab56',
      },
      {
        fullname: 'Ori',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
        username: '16833983',
        password: 'Gustavo',
        id: '16833983',
        _id: '622f3401e36c59e6164fab53',
      },
      {
        fullname: 'May',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
        username: '18223142',
        password: 'Fernanda',
        id: '18223142',
        _id: '622f3401e36c59e6164fab54',
      },
      {
        fullname: 'Vered',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
        username: '39214712',
        password: 'Stephanie',
        id: '39214712',
        _id: '622f3401e36c59e6164fab55',
      },
      {
        fullname: 'Shylie',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
        username: '2537111',
        password: 'Barbara',
        id: '2537111',
        _id: '622f3401e36c59e6164fab56',
      },
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
      <section className="influents-filter">
        <Slider {...settings}>
          {data.map((user) => (
            <div className="content-carousel">
              <img src={user.imgUrl} />
            </div>
          ))}
        </Slider>
      </section>
    )
  }
}

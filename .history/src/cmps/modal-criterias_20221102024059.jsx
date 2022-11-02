import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Women from '../assets/img/criterias-icon/women.jpg'
import Men from '../assets/img/criterias-icon/men.jpg'
import Home from '../assets/img/criterias-icon/home.jpg'
import Tech from '../assets/img/criterias-icon/tech.jpg'
import Fitness from '../assets/img/criterias-icon/fitness.jpg'
import Pet from '../assets/img/criterias-icon/pet.jpg'
import Coat from '../assets/img/criterias-icon/coat.jpg'
import Shoes from '../assets/img/criterias-icon/shoes.jpg'
import Bag from '../assets/img/criterias-icon/bag.jpg'

export const ModalCriterias = () => {
  const criterias = [
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

  return (
    <section className="modal-criterias">
      {criterias.map((criteria) => (
        <div className="card card-criterias" key={criteria.title}>
          {/* <img src={criteria.imgUrl} /> */}
          <h4>{criterias.title}</h4>
        </div>
      ))}
    </section>
  )
}

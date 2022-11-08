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
import Beauty from '../assets/img/criterias-icon/beauty.jpg'
import Food from '../assets/img/criterias-icon/food.jpg'
import Kids from '../assets/img/criterias-icon/kids.jpg'
import Sport from '../assets/img/criterias-icon/sport.jpg'
import Baby from '../assets/img/criterias-icon/baby.jpg'
import Diy from '../assets/img/criterias-icon/diy.jpg'
import Kitchen from '../assets/img/criterias-icon/kitchen.jpg'

export const ModalCriterias = ({ onSetFilterCriterias, newProduct }) => {
  const criterias = [
    { imgUrl: Diy, title: 'diy' },
    { imgUrl: Kitchen, title: 'kitchen' },
    { imgUrl: Women, title: 'women' },
    { imgUrl: Men, title: 'men' },
    { imgUrl: Home, title: 'home' },
    { imgUrl: Tech, title: 'tech' },
    { imgUrl: Fitness, title: 'fitness' },
    { imgUrl: Pet, title: 'pet' },
    { imgUrl: Coat, title: 'coat' },
    { imgUrl: Shoes, title: 'shoes' },
    { imgUrl: Bag, title: 'bag' },
    { imgUrl: Beauty, title: 'beauty' },
    { imgUrl: Food, title: 'food' },
    { imgUrl: Kids, title: 'kids' },
    { imgUrl: Sport, title: 'sport' },
    { imgUrl: Baby, title: 'baby' },
  ]

  return (
    <section className="modal-criterias">
      {criterias.map((criteria) => (
        <div
          className={
            newProduct.criterias.includes(criteria.title)
              ? 'card card-criterias green'
              : 'card card-criterias'
          }
          key={criteria.title}
          onClick={() => {
            onSetFilterCriterias(criteria.title)
          }}
        >
          <img src={criteria.imgUrl} />
          <h4>{criteria.title}</h4>
        </div>
      ))}
    </section>
  )
}

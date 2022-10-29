import React, { useState } from 'react'
import { connect } from 'react-redux'

import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi'

export const AppFooter = () => {
  return (
    <footer className="app-footer">
      <ul>
        <li>
          <BsInstagram />
        </li>
        <li>
          <FaTiktok />
        </li>
        <li>
          <BsFacebook />
        </li>
        <li>
          <FiYoutube />
        </li>
      </ul>
    </footer>
  )
}

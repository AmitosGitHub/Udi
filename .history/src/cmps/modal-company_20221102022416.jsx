import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Alo from '../assets/img/company-logo/alo.jpeg'
import Asos from '../assets/img/company-logo/asos.jpeg'
import Amzn from '../assets/img/company-logo/amzn.jpeg'
import Aliexpress from '../assets/img/company-logo/aliexpress.jpeg'
import Ebay from '../assets/img/company-logo/ebay.jpeg'
import Terminalx from '../assets/img/company-logo/terminalx.jpeg'
import Iherb from '../assets/img/company-logo/iherb.jpeg'
import Next from '../assets/img/company-logo/next.jpeg'

export const ModalCompany = () => {
  const companys = [
    { imgUrl: Alo, title: 'Alo' },
    { imgUrl: Asos, title: 'Asos' },
    { imgUrl: Amzn, title: 'Amzon' },
    { imgUrl: Aliexpress, title: 'Aliexpress' },
    { imgUrl: Ebay, title: 'Ebay' },
    { imgUrl: Terminalx, title: 'Terminalx' },
    { imgUrl: Iherb, title: 'Iherb' },
    { imgUrl: Next, title: 'Next' },
  ]

  return (
    <section className="modal-company">
      {companys.map((company) => (
        <div className="card card-company">
          {/* <img src={company.imgUrl} /> */}
        </div>
      ))}
    </section>
  )
}

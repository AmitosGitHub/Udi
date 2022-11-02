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
import Fre from '../assets/img/company-logo/fre.jpeg'
import Ksp from '../assets/img/company-logo/ksp.jpeg'
import Labeaute from '../assets/img/company-logo/la-beaute.jpeg'
import Revolve from '../assets/img/company-logo/revolve.jpeg'
import Yvesrocher from '../assets/img/company-logo/yves-rocher.jpeg'

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
    { imgUrl: Fre, title: 'Fre' },
    { imgUrl: Ksp, title: 'Ksp' },
    { imgUrl: Labeaute, title: 'Labeaute' },
    { imgUrl: Yvesrocher, title: 'Yves Rocher' },
    { imgUrl: Revolve, title: 'Revolve' },
  ]

  return (
    <section className="modal-company">
      {companys.map((item) => (
        <div className="card card-company" key={item.title}>
          <img src={item.imgUrl} />
        </div>
      ))}
    </section>
  )
}

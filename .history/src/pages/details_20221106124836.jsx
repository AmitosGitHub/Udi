import { React, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { getProductById } from '../store/product.actions.js'
import { HiLink } from 'react-icons/hi'

export const Details = () => {
  const params = useParams().id
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('params:', params)
    dispatch(getProductById(params))
    // console.log('selectedProduct', selectedProduct)
    // console.log(' user:', user)
  }, [])

  // useEffect(() => {
  //   console.log('selectedProduct', selectedProduct)
  // }, [selectedProduct])

  return (
    <section className="details">
      <header>
        <button>
          Link{' '}
          <span>
            <HiLink />
          </span>
        </button>
      </header>
      <main>
        <div className="grid-img">
          {gridImgs.map((item, idx) => (
            // console.log('item:',item)
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>
          c,sdpcpdlv pdlvp[lsdpvlsdlv <br></br>plsdlvplsdpvl sdpvc;dpv
          pplvpsdpvl pldslvplsdp p,pfvp
        </p>
      </footer>
    </section>
  )
}

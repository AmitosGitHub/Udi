import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { HiLink } from 'react-icons/hi'

export const Details = () => {
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

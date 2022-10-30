import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const AddProduct = () => {
  return (
    <section className="add-product">
      <header>
        <ul>
          <li>x</li>
          <li>save</li>
        </ul>
      </header>

      <main>
        <div className="main-header">
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            required
          />
        </div>
      </main>
    </section>
  )
}

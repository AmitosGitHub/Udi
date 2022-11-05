import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { ImgUploader } from '../cmps/img-uploader.jsx'
import { ModalCompany } from '../cmps/modal-company.jsx'
import { ModalCriterias } from '../cmps/modal-criterias.jsx'

import Grid1 from '../assets/img/grid/grid1.jpeg'
import Grid3 from '../assets/img/grid/grid3.jpeg'
import Grid4 from '../assets/img/grid/grid4.jpeg'

import { BsImage } from 'react-icons/bs'

export const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    createdBy: null,
    link: null,
    imgs: [],
    description: null,
    company: null,
    criterias: [],
  })

  const [approve, setApprove] = useState({
    isGallery: false,
    isLink: false,
    isImg: false,
    isDescription: false,
  })

  const [isOpenModalCompany, setIsOpenModalCompany] = useState(false)
  const [isOpenModalCriterias, setIsOpenModalCriterias] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [gridImgs, setGridImgs] = useState([])

  useEffect(() => {
    console.log('rendering...')
  }, [gridImgs])

  const setToggleModal = () => {
    setIsOpen(!isOpen)
  }

  // const onSelectedGrid = (val) => {
  //   console.log(val)
  //   setApprove({
  //     isGallery: true,
  //     isLink: approve.isLink,
  //     isImg: approve.isImg,
  //     isDescription: approve.isDescription,
  //   })
  //   setSelectedGrid({
  //     firstTime: false,
  //     grid1: false,
  //     grid3: false,
  //     grid4: false,
  //   })

  //   setSelectedGrid((prevState) => ({
  //     ...prevState,
  //     [val]: true,
  //   }))

  //   setToggleModal()
  // }

  const onGridImgs = (imgs) => {
    console.log('imgs:', imgs)
    setGridImgs([...imgs])
  }

  const onSelecetCompany = () => {
    setIsOpenModalCompany(!isOpenModalCompany)
  }
  const onSelecetCriterias = () => {
    setIsOpenModalCriterias(!isOpenModalCriterias)
  }

  const onAddProduct = () => {
    console.log('onAddProduct()')
  }
  const onSetFilterCriterias = (criteria) => {
    const criterias = newProduct.criterias
    criterias.push(criteria)

    setNewProduct({ ...newProduct, criterias: criterias })
  }

  const onSetFilterCompany = (company) => {
    setNewProduct({ ...newProduct, company: company })
    setNewProduct((prev) => ({ ...prev, company }))
    console.log('newProduct:', newProduct)
    setTimeout(() => {
      setIsOpenModalCompany(!isOpenModalCompany)
    }, 200)
  }

  console.log('rendering:...')
  return (
    <section className="add-product">
      <header>
        <div className="top-header">
          <div className="box approve-link">insert link</div>
          <div className="line"></div>
          <div
            className={
              gridImgs.length ? 'box approve-img green' : 'box approve-img'
            }
          >
            upload image
          </div>
          <div className="line"></div>
          <div className="box approve-description">insert description</div>
        </div>
        <div className="bottom-header">
          <button
            onClick={() => {
              onSelecetCompany()
            }}
          >
            company
          </button>
          <button
            onClick={() => {
              onSelecetCriterias()
            }}
          >
            criterias
          </button>
        </div>
      </header>

      <div className="container-modal">
        {isOpenModalCompany && (
          <div className="modal-company">
            <ModalCompany onSetFilterCompany={onSetFilterCompany} />
          </div>
        )}
        {isOpenModalCriterias && (
          <div className="modal-criterias">
            <ModalCriterias onSetFilterCriterias={onSetFilterCriterias} />
          </div>
        )}
      </div>

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

        <div className="container-gallery-img">
          {gridImgs.length < 5 && (
            <div className="enter-imgs">
              <h2>upload max 5 images</h2>
              <ImgUploader onGridImgs={onGridImgs} />
            </div>
          )}
          <div className="grid-img">
            {gridImgs.map((item, idx) => (
              // console.log('item:',item)
              <div className={'box box' + idx}>
                {/* <h3>{'box box' + idx}</h3> */}
                <img src={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="main-footer">
          <textarea placeholder="insert description" />
          <button
            onClick={() => {
              onAddProduct()
            }}
          >
            Add Product
          </button>
        </div>
      </main>
    </section>
  )
}

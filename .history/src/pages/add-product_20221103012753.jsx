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
import { GiCheckMark } from 'react-icons/gi'

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
  const [isValidLink, setIsValidLink] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [gridImgs, setGridImgs] = useState([])

  useEffect(() => {
    console.log('rendering...')
  }, [gridImgs])

  const setToggleModal = () => {
    setIsOpen(!isOpen)
  }

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
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      imgs: gridImgs,
    }))
    console.log('NewProduct:', newProduct)
  }

  const onSetFilterCriterias = (criteria) => {
    const criterias = newProduct.criterias
    criterias.push(criteria)

    // setNewProduct({ ...newProduct, criterias: criterias })
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      criterias: criterias,
    }))
  }

  const onSetFilterCompany = (value) => {
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      company: value,
    }))

    setTimeout(() => {
      setIsOpenModalCompany(!isOpenModalCompany)
    }, 200)
  }

  const handleChangeDescription = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    let value = target.value

    // console.log(value, field, target)
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      description: value,
    }))
  }

  const handleChange = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    let value = target.value

    if (!value || !checkLink(value)) {
      setIsValidLink(false)
      setNewProduct((prevNewProduct) => ({
        ...prevNewProduct,
        link: null,
      }))
    }

    if (checkLink(value)) {
      console.log('OK:')
      setIsValidLink(true)
      setNewProduct((prevNewProduct) => ({
        ...prevNewProduct,
        link: value,
      }))
    }
  }

  const checkLink = (link) => {
    // 'https://s.click.aliexpress.com/e/_DnK2Vmb'
    const regex = new RegExp('https', 'ig')
    return regex.test(link)
  }

  console.log('rendering:...', newProduct)
  return (
    <section className="add-product">
      <header>
        <div className="top-header">
          <div
            className={
              newProduct.link ? 'box approve-link green' : 'box approve-link'
            }
          >
            insert link
          </div>
          <div className="line"></div>
          <div
            className={
              gridImgs.length ? 'box approve-img green' : 'box approve-img'
            }
          >
            upload image
          </div>
          <div className="line"></div>
          <div
            className={
              newProduct.description
                ? 'box approve-description green'
                : 'box approve-description'
            }
          >
            insert description
          </div>
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
          <div className="valid-box-link">
            {isValidLink ? <GiCheckMark /> : ''}
          </div>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            required
            // value={newProduct.link}
            onChange={handleChange}
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
          <button
            onClick={() => {
              onAddProduct()
            }}
          >
            Add Product
          </button>
          <textarea
            placeholder="insert description"
            type="text"
            name="description"
            id="description"
            required
            onChange={handleChangeDescription}
          />
        </div>
      </main>
    </section>
  )
}

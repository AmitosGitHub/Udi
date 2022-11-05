import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { ImgUploader } from '../cmps/img-uploader.jsx'
import { ModalCompany } from '../cmps/modal-company.jsx'
import { ModalCriterias } from '../cmps/modal-criterias.jsx'
import { ApprovalChain } from '../cmps/approval-chain.jsx'
import { OrderGallery } from '../cmps/order-gallery.jsx'

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
    console.log('criteria:', criteria)
    let criterias = newProduct.criterias
    console.log('criterias:', criterias)
    if (criterias.includes(criteria)) {
      criterias.filter((item) => {
        return item !== criteria
      })
      console.log('criterias:', criterias)
      console.log('if:')
    } else {
      console.log('else:')
      criterias.push(criteria)
    }
    console.log('criterias:', criterias)
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
          <ApprovalChain newProduct={newProduct} gridImgs={gridImgs} />
        </div>
        <div className="bottom-header">
          <button
            className={
              newProduct.company ? 'btn btn-company green' : 'btn btn-company'
            }
            onClick={() => {
              onSelecetCompany()
            }}
          >
            company
          </button>
          <button
            className={
              newProduct.criterias
                ? 'btn btn-criterias green'
                : 'btn btn-criterias'
            }
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
            <ModalCompany
              onSetFilterCompany={onSetFilterCompany}
              newProduct={newProduct}
            />
          </div>
        )}
        {isOpenModalCriterias && (
          <div className="modal-criterias">
            <ModalCriterias
              onSetFilterCriterias={onSetFilterCriterias}
              newProduct={newProduct}
            />
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
          <div className="order-gallery-img">
            <OrderGallery gridImgs={gridImgs} />
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

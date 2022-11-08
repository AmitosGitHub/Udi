import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { ImgUploader } from '../cmps/img-uploader.jsx'
import { ModalCompany } from '../cmps/modal-company.jsx'
import { ModalCriterias } from '../cmps/modal-criterias.jsx'
import { ApprovalChain } from '../cmps/approval-chain.jsx'
import { OrderGallery } from '../cmps/order-gallery.jsx'
import {
  loadProducts,
  addProduct,
  updateProduct,
  removeProduct,
} from '../store/product.actions.js'
import { useDispatch, useSelector } from 'react-redux'

import { BsImage } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'

export const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.productModule)
  const [newProduct, setNewProduct] = useState({
    seller: null,
    link: null,
    imgUrls: [],
    summary: null,
    company: null,
    criterias: [],
    created: null,
    countClick: 0,
    stock: true,
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
  const [isOpenSuccessfulyAdd, setIsOpenSuccessfulyAdd] = useState(false)

  const [gridImgs, setGridImgs] = useState([])

  useEffect(() => {
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      imgUrls: gridImgs,
    }))
  }, [gridImgs])

  useEffect(() => {
    setToggleModalSuccessfulyAdd()
  }, [products])

  const setToggleModal = () => {
    setIsOpen(!isOpen)
  }
  const setToggleModalSuccessfulyAdd = () => {
    setIsOpenSuccessfulyAdd(!isOpenSuccessfulyAdd)
  }

  const onGridImgs = (imgUrls) => {
    // console.log('imgUrls:', imgUrls)
    setGridImgs([...imgUrls])
  }

  const onSelecetCompany = () => {
    setIsOpenModalCompany(!isOpenModalCompany)
  }
  const onSelecetCriterias = () => {
    setIsOpenModalCriterias(!isOpenModalCriterias)
  }

  const onAddProduct = () => {
    console.log('NewProduct:', newProduct)
    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      created: Date.now(),
    }))
    dispatch(addProduct(newProduct))

    setTimeout(setToggleModalSuccessfulyAdd, 1000)
    setTimeout(() => {
      navigate(`/`)
    }, 2000)
  }

  const onSetFilterCriterias = (criteria) => {
    let criterias = newProduct.criterias
    if (criterias.includes(criteria)) {
      criterias = criterias.filter((item) => item != criteria)
    } else {
      criterias.push(criteria)
    }

    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      criterias: criterias,
    }))
  }

  const onSetFilterCompany = (val) => {
    let currCompany = newProduct.company
    if (currCompany === val) {
      val = null
    }

    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      company: val,
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
      summary: value,
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
              newProduct.criterias.length > 0
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
        {isOpenSuccessfulyAdd && (
          <div className="modal-successfuly-add">
            <h2> new product successfully </h2>
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
            // value={newProduct.link}
            onChange={handleChange}
          />
          <div className="valid-box-link">
            {isValidLink ? <GiCheckMark /> : ''}
          </div>
        </div>

        <div className="container-gallery-img">
          <ImgUploader onGridImgs={onGridImgs} />
          <div className="order-gallery-img">
            <OrderGallery gridImgs={gridImgs} />
          </div>
        </div>

        <div className="main-footer">
          <textarea
            placeholder="insert description"
            type="text"
            name="description"
            id="description"
            required
            onChange={handleChangeDescription}
          />
          <button
            className={
              newProduct.criterias.length > 0 &&
              newProduct.company &&
              newProduct.summary &&
              newProduct.link
                ? 'btn btn-add green'
                : 'btn  btn-add'
            }
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

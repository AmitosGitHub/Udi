import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { ImgUploader } from '../cmps/img-uploader.jsx'

import Grid1 from '../assets/img/grid/grid1.jpeg'
import Grid3 from '../assets/img/grid/grid3.jpeg'
import Grid4 from '../assets/img/grid/grid4.jpeg'

import { BsImage } from 'react-icons/bs'

export const AddProduct = () => {
  const [approve, setApprove] = useState({
    isGallery: false,
    isLink: false,
    isImg: false,
    isDescription: false,
  })
  const [selectedGrid, setSelectedGrid] = useState({
    firstTime: true,
    grid1: false,
    grid3: false,
    grid4: false,
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

  const onSelectedGrid = (val) => {
    console.log(val)
    setApprove({
      isGallery: true,
      isLink: approve.isLink,
      isImg: approve.isImg,
      isDescription: approve.isDescription,
    })
    setSelectedGrid({
      firstTime: false,
      grid1: false,
      grid3: false,
      grid4: false,
    })

    setSelectedGrid((prevState) => ({
      ...prevState,
      [val]: true,
    }))

    setToggleModal()
  }

  const onGridImgs = (imgs) => {
    console.log('imgs:', imgs)

    setGridImgs([...imgs])
  }

  const onSelecetCompany = () => {
    console.log('onSelecetCompany:')
    setIsOpenModalCompany(!isOpenModalCompany)
  }
  const onSelecetCriterias = () => {
    console.log('onSelecetCriterias:')
    setIsOpenModalCriterias(!isOpenModalCriterias)
  }

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

          {isOpen && (
            <div className="modal">
              <img
                src={Grid1}
                onClick={() => {
                  onSelectedGrid('grid1')
                }}
              />
              <img
                src={Grid3}
                onClick={() => {
                  onSelectedGrid('grid3')
                }}
              />
              <img
                src={Grid4}
                onClick={() => {
                  onSelectedGrid('grid4')
                }}
              />
            </div>
          )}
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
          {/* {selectedGrid.grid1 && (
            <div className="gallery-img1">
              <div className="box box1">
                <ImgUploader />
              </div>
            </div>
          )}
          {selectedGrid.grid3 && (
            <div className="gallery-img2">
              <div className="box box1">
                <ImgUploader />
              </div>
              <div className="box box2">
                <ImgUploader />
              </div>
              <div className="box box3">
                <ImgUploader />
              </div>
            </div>
          )}
          {(selectedGrid.grid4 || selectedGrid.firstTime) && (
            <div className="gallery-img3">
              <div className="box box1">
                <ImgUploader />
              </div>
              <div className="box box2">
                <ImgUploader />
              </div>
              <div className="box box3">
                <ImgUploader />
              </div>
              <div className="box box4">
                <ImgUploader />
              </div>
              <div className="box box5">
                <ImgUploader />
              </div>
            </div>
          )} */}
        </div>

        <div className="main-footer">
          {/* <input type="text" placeholder="insert description" /> */}
          <textarea placeholder="insert description" />
          <button>Add</button>
        </div>
      </main>
    </section>
  )
}

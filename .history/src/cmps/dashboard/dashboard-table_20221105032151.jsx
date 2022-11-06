import * as React from 'react'

import Home1 from '../../assets/img/product/home1.jpeg'
import Home2 from '../../assets/img/product/home2.jpeg'
import Home3 from '../../assets/img/product/home3.jpeg'
import Men1 from '../../assets/img/product/shirt-men.jpeg'

export const DashboardTable = () => {
  //   console.log('selectedStay:', selectedStay)
  //   console.log('selectedStay.reservation[0]:', selectedStay.reservation[0])
  const data = [
    {
      _id: 'u104',
      price: 400,
      created: '2022-10-02',
      imgUrl: Men1,
      click: 300,
    },
    {
      _id: 'u105',
      price: 100,
      created: '2022-10-02',
      imgUrl: Home1,
      click: 200,
    },
    {
      _id: 'u106',
      price: 200,
      created: '2022-10-02',
      imgUrl: Home2,
      click: 10,
    },
    {
      _id: 'u107',
      price: 500,
      created: '2022-10-02',
      imgUrl: Home3,
      click: 1000,
    },
  ]

  return (
    <section className="dashboard-table-new-order">
      <table>
        <thead>
          <tr>
            <td>
              <button>Best Seller</button>
            </td>
            <td>
              <button>Hot Seller</button>
            </td>
            <td>
              <button>Old to New</button>
            </td>
            <td>
              <button>New to Old</button>
            </td>
            <td>
              <button>Click</button>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr className="preview-product" key={product._id}>
              <td>{product._id}</td>
              <td>{product._id}</td>
              <td style={ Width: '100px', Height: '100px' }>
                <img src={product.imgUrl} />
              </td>
              <td>{product.created}</td>
              <td>{product.price}</td>
              <td>{product.click}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

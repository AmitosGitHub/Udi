import * as React from 'react'

export const DashboardTable = () => {
  //   console.log('selectedStay:', selectedStay)
  //   console.log('selectedStay.reservation[0]:', selectedStay.reservation[0])
  const dataUser = [
    {
      _id: 'u104',
      price: 400,
      dates: { checkIn: '2022-10-02', checkOut: '2022-10-06' },
      fullname: 'Margaux',
      username: '75091961',
      password: 'Margaux',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
      isAdmin: false,
    },
    {
      _id: 'u109',
      price: 400,
      dates: { checkIn: '2022-9-16', checkOut: '2022-9-22' },
      fullname: 'Roti',
      username: '75091968',
      password: '1234',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
      isAdmin: false,
    },
    {
      _id: 'u110',
      price: 400,
      dates: { checkIn: '2022-8-16', checkOut: '2022-8-22' },
      fullname: 'Francine',
      username: '75091969',
      password: 'Francine',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
      isAdmin: false,
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
          {dataUser.map((user) => (
            <tr className="preview-user" key={user._id}>
              <td>
                <button
                  className="btn-approve"
                  onClick={() => {
                    console.log('hiii btn approve')
                  }}
                >
                  confirm
                </button>
              </td>
              <td>
                <button
                  className="btn-refuse"
                  onClick={() => {
                    console.log('hiii btn refuse')
                  }}
                >
                  reject
                </button>
              </td>
              <td>
                <img className="img-avatar" src={user.imgUrl} />
              </td>
              <td>{user._id}</td>
              <td>{user.fullname}</td>
              <td>
                {user.dates.checkIn}/{user.dates.checkOut}
              </td>
              <td>{user.price}</td>
              <td>
                <button
                  className="btn-order btn-commit"
                  onClick={() => {
                    console.log('hiii btn')
                  }}
                >
                  commit
                </button>
              </td>
              <td>
                <button
                  className="btn-order btn-conection"
                  onClick={() => {
                    console.log('hiii btn')
                  }}
                >
                  connection
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
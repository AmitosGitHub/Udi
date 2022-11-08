import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import {
  getActionRemoveProduct,
  getActionAddProduct,
  getActionUpdateProduct,
} from '../store/product.actions.js'
import { store } from '../store/store'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = 'product'
const productChannel = new BroadcastChannel('productChannel')

// insertDemoData()

;(() => {
  productChannel.addEventListener('message', (ev) => {
    store.dispatch(ev.data)
  })
})()

export const productService = {
  query,
  getById,
  save,
  remove,
  getEmptyProduct,
  setReservationProduct,
  getByHostId,
}
window.cs = productService

async function query(filterBy) {
  console.log('filterBy from query:', filterBy)
  var products = await storageService.query(STORAGE_KEY)
  console.log('products:', products)
  // products = products.map((product) => {
  //   return product
  // })

  let newProducts = []
  // if (filterBy) {
  //   const { name, type, amenities, price, room } = filterBy
  //   // console.log('{name,type,amenities,price,room}:',{name,type,amenities,price,room})
  //   if (amenities) {
  //     if (amenities.Wifi) {
  //       console.log('amenities.Wifi:')
  //       products = products.filter((product) =>
  //         product.amenities.includes('Wifi')
  //       )
  //     }
  //     if (amenities.Washer) {
  //       console.log('amenities.Washer:')
  //       products = products.filter((product) =>
  //         product.amenities.includes('Washer')
  //       )
  //     }
  //     if (amenities.AirConditioning) {
  //       console.log('amenities.AirConditioning:')
  //       products = products.filter((product) =>
  //         product.amenities.includes('Air conditioning')
  //       )
  //     }
  //     if (amenities.Kitchen) {
  //       console.log('amenities.Kitchen:')
  //       products = products.filter((product) =>
  //         product.amenities.includes('Kitchen')
  //       )
  //     }
  //   }
  //   if (room) {
  //     // if(room.roomType){
  //     //     console.log('room.roomType:')
  //     //     products =  products.filter((product) => product.roomType.includes(roomType))
  //     // }
  //     if (room.bathrooms) {
  //       console.log('room.bathrooms:')
  //       products = products.filter(
  //         (product) => product.bathrooms >= room.bathrooms
  //       )
  //     }
  //     if (room.bedrooms) {
  //       console.log('room.bedrooms:')
  //       products = products.filter(
  //         (product) => product.bedrooms >= room.bedrooms
  //       )
  //     }
  //   }

  //   if (name) {
  //     const regex = new RegExp(name, 'ig')
  //     products = products.filter((product) =>
  //       regex.test(
  //         product.loc.country || product.loc.city || product.loc.countryCode
  //       )
  //     )
  //   }
  //   if (type) {
  //     const regex = new RegExp(type, 'ig')
  //     products = products.filter((product) => regex.test(product.type))
  //   }
  // }
  //   console.log('newProducts:',newProducts)
  // if (!newProducts || newProducts.length > 0) {
  //   products = newProducts
  // }
  return products
}
function getById(productId) {
  return storageService.get(STORAGE_KEY, productId)
  // return axios.get(`/api/product/${productId}`)
}
function getByHostId(user) {
  return storageService.get(STORAGE_KEY, null, user)
  // return axios.get(`/api/product/${productId}`)
}
async function remove(productId) {
  await storageService.remove(STORAGE_KEY, productId)
  productChannel.postMessage(getActionRemoveProduct(productId))
}
async function save(product) {
  console.log('save(product):', product)
  var savedProduct
  if (product._id) {
    savedProduct = await storageService.put(STORAGE_KEY, product)
    productChannel.postMessage(getActionUpdateProduct(savedProduct))
  } else {
    // Later, owner is set by the backend
    // product.owner = userService.getLoggedinUser()
    savedProduct = await storageService.post(STORAGE_KEY, product)
    console.log('savedProduct:', savedProduct)
    productChannel.postMessage(getActionAddProduct(savedProduct))
  }
  return savedProduct
}

function getEmptyProduct() {
  return {
    name: 'Susita-' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
    type: 'House',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/47d23608-568e-4a1d-b2c0-5cd74a20bc22.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/47d23608-568e-4a1d-b2c0-5cd74a20bc22.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/47d23608-568e-4a1d-b2c0-5cd74a20bc22.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/47d23608-568e-4a1d-b2c0-5cd74a20bc22.jpg?im_w=1200',
    ],
    summary:
      'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
    loc: {
      country: 'Turkey',
      city: 'Kemer',
      countryCode: 'PT',
      address: '17 Kombo st',
      lat: 36.597718,
      lng: 30.546619,
    },
  }
}

async function setReservationProduct(product, user, dates, price) {
  if (!product.reservation) {
    product.reservation = [
      {
        user,
        dates,
        price,
      },
    ]
  } else {
    product.reservation.unshift({
      user,
      dates,
      price,
    })
  }
  const savedProduct = await storageService.put(STORAGE_KEY, product)
  console.log('savedProduct:', savedProduct)
  // return storageService.get(STORAGE_KEY, productId)
  // return axios.get(`/api/product/${productId}`)
}

// insertDemoData()
function insertDemoData() {
  // TEST DATA
  var products = [
    {
      _id: '622f337a75c7d36e498aaaf8',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676652/glhgyy1syxhceklaadni.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676681/d3wahuyfkfq344gnbvbs.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676729/h2cvncrqnu3n697dz1jj.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676745/jnj9xfs7d7kaejra1xxu.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676763/ybznmi4m7t7njufynp9c.jpg',
      ],
      summary:
        'אוסטרלי קלאסי נשים של קרסול מגפי קטיפה עבה חם חורף מגפי נשים עור אמיתי שלג מגפי פרה זמש גבירותיי נעליים',
      criterias: ['women', 'shoes'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DlA0jeT',
      stock: true,
      company: null,
    },
    {
      _id: '622f337a75c7d36e498aav56',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677833/wp65vjupzxtciibeiwej.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677842/xd6cs7szdoumeqjsyosj.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677857/cfaf4ctgt5dzam1vinot.jpg',
      ],
      summary: 'כפכפים גברים כמו טבע נאות',
      criterias: ['men', 'shoes'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DDdLIDz',
      stock: true,
      company: null,
    },
    {
      _id: '622f337a75c7d36e498aa123',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678459/xxql61glb1dhkcw5yldr.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678473/mxq4h9gjfg3vgj48dzpb.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678521/hex5p7has52lpooc7qde.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678533/ujkj0t4ozugxyejqgqn5.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678543/xldadt1trpv9eazxebna.jpg',
      ],
      summary: 'מעיל יוניקלו',
      criterias: ['men', 'coat'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DdWa4M3',
      stock: true,
      company: null,
    },
    {
      _id: '622f337a75c7d36e498aad456',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682756/owlklvholh4n8wzqm7g5.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682768/xc9irbvdi8pv2f7qkoe7.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682782/thhwl6hup9mfoq7jtlkq.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682803/epp7uhzsg0lclqc8z3g8.png',
      ],
      summary: 'כוסות קפה קר',
      criterias: ['home'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DBMwPkJ',
      stock: true,
      company: null,
    },
  ]

  storageService.postMany(STORAGE_KEY, products)
}

import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import {
  getActionRemoveStay,
  getActionAddStay,
  getActionUpdateStay,
} from '../store/stay.actions.js'
import { store } from '../store/store'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = 'product'
const stayChannel = new BroadcastChannel('stayChannel')

// insertDemoData()

;(() => {
  stayChannel.addEventListener('message', (ev) => {
    store.dispatch(ev.data)
  })
})()

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  setReservationStay,
  getByHostId,
}
window.cs = stayService

async function query(filterBy) {
  // console.log('filterBy from query:',filterBy)
  var stays = await storageService.query(STORAGE_KEY)

  stays = stays.map((stay) => {
    stay.rate = 4.5

    return stay
  })

  let newStays = []
  if (filterBy) {
    const { name, type, amenities, price, room } = filterBy
    // console.log('{name,type,amenities,price,room}:',{name,type,amenities,price,room})
    if (amenities) {
      if (amenities.Wifi) {
        console.log('amenities.Wifi:')
        stays = stays.filter((stay) => stay.amenities.includes('Wifi'))
      }
      if (amenities.Washer) {
        console.log('amenities.Washer:')
        stays = stays.filter((stay) => stay.amenities.includes('Washer'))
      }
      if (amenities.AirConditioning) {
        console.log('amenities.AirConditioning:')
        stays = stays.filter((stay) =>
          stay.amenities.includes('Air conditioning')
        )
      }
      if (amenities.Kitchen) {
        console.log('amenities.Kitchen:')
        stays = stays.filter((stay) => stay.amenities.includes('Kitchen'))
      }
    }
    if (room) {
      // if(room.roomType){
      //     console.log('room.roomType:')
      //     stays =  stays.filter((stay) => stay.roomType.includes(roomType))
      // }
      if (room.bathrooms) {
        console.log('room.bathrooms:')
        stays = stays.filter((stay) => stay.bathrooms >= room.bathrooms)
      }
      if (room.bedrooms) {
        console.log('room.bedrooms:')
        stays = stays.filter((stay) => stay.bedrooms >= room.bedrooms)
      }
    }

    if (name) {
      const regex = new RegExp(name, 'ig')
      stays = stays.filter((stay) =>
        regex.test(stay.loc.country || stay.loc.city || stay.loc.countryCode)
      )
    }
    if (type) {
      const regex = new RegExp(type, 'ig')
      stays = stays.filter((stay) => regex.test(stay.type))
    }
  }
  //   console.log('newStays:',newStays)
  if (!newStays || newStays.length > 0) {
    stays = newStays
  }
  return stays
}
function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
  // return axios.get(`/api/stay/${stayId}`)
}
function getByHostId(user) {
  return storageService.get(STORAGE_KEY, null, user)
  // return axios.get(`/api/stay/${stayId}`)
}
async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
  stayChannel.postMessage(getActionRemoveStay(stayId))
}
async function save(stay) {
  console.log('save(stay):', stay)
  var savedStay
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay)
    stayChannel.postMessage(getActionUpdateStay(savedStay))
  } else {
    // Later, owner is set by the backend
    // stay.owner = userService.getLoggedinUser()
    savedStay = await storageService.post(STORAGE_KEY, stay)
    console.log('savedStay:', savedStay)
    stayChannel.postMessage(getActionAddStay(savedStay))
  }
  return savedStay
}

function getEmptyStay() {
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

async function setReservationStay(stay, user, dates, price) {
  if (!stay.reservation) {
    stay.reservation = [
      {
        user,
        dates,
        price,
      },
    ]
  } else {
    stay.reservation.unshift({
      user,
      dates,
      price,
    })
  }
  const savedStay = await storageService.put(STORAGE_KEY, stay)
  console.log('savedStay:', savedStay)
  // return storageService.get(STORAGE_KEY, stayId)
  // return axios.get(`/api/stay/${stayId}`)
}

// insertDemoData()
function insertDemoData() {
  // TEST DATA
  var products = [
    {
      _id: '622f337a75c7d36e498aaaf8',
      name: 'אוסטרלי קלאסי נשים ',
      type: 'shoes',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676652/glhgyy1syxhceklaadni.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676681/d3wahuyfkfq344gnbvbs.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676729/h2cvncrqnu3n697dz1jj.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676745/jnj9xfs7d7kaejra1xxu.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667676763/ybznmi4m7t7njufynp9c.jpg',
      ],
      summary:
        'אוסטרלי קלאסי נשים של קרסול מגפי קטיפה עבה חם חורף מגפי נשים עור אמיתי שלג מגפי פרה זמש גבירותיי נעליים',
      amenities: ['women', 'shoes'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DlA0jeT',
      stock: true,
    },
    {
      _id: '622f337a75c7d36e498aav56',
      name: 'כפכפים גברים כמו טבע נאות',
      type: 'shoes',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677833/wp65vjupzxtciibeiwej.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677842/xd6cs7szdoumeqjsyosj.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667677857/cfaf4ctgt5dzam1vinot.jpg',
      ],
      summary: 'כפכפים גברים כמו טבע נאות',
      amenities: ['men', 'shoes'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DDdLIDz',
      stock: true,
    },
    {
      _id: '622f337a75c7d36e498aa123',
      name: 'מעיל יוניקלו',
      type: 'coat',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678459/xxql61glb1dhkcw5yldr.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678473/mxq4h9gjfg3vgj48dzpb.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678521/hex5p7has52lpooc7qde.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678533/ujkj0t4ozugxyejqgqn5.jpg',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667678543/xldadt1trpv9eazxebna.jpg',
      ],
      summary: 'מעיל יוניקלו',
      amenities: ['men', 'coat'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DdWa4M3',
      stock: true,
    },
    {
      _id: '622f337a75c7d36e498aad456',
      name: 'כוסות קפה קר',
      type: 'home',
      imgUrls: [
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682756/owlklvholh4n8wzqm7g5.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682768/xc9irbvdi8pv2f7qkoe7.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682782/thhwl6hup9mfoq7jtlkq.png',
        'https://res.cloudinary.com/dcwibf9o5/image/upload/v1667682803/epp7uhzsg0lclqc8z3g8.png',
      ],
      summary: 'כוסות קפה קר',
      amenities: ['home'],
      created: '',
      seller: {
        _id: 'u101',
        fullname: 'Amit Osman',
      },
      countClick: 0,
      link: 'https://s.click.aliexpress.com/e/_DBMwPkJ',
      stock: true,
    },
  ]

  storageService.postMany(STORAGE_KEY, products)
}

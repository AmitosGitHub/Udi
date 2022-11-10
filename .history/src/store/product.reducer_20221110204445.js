const initialState = {
  products: [],
  selectedProduct: null,
  countProducts: [],
  garbages: [],
  lastRemovedProduct: null,
  test: true,
  test2: false,
  filterBy: {
    name: '',
    type: '',
    amenities: '',
    price: 0,
    room: { bathrooms: 0, bedrooms: 0, roomType: '' },
  },
  isEditor: false,
}
export function productReducer(state = initialState, action) {
  var newState = state
  var products
  var cart
  switch (action.type) {
    case 'SET_PRODUCTS':
      console.log('SET_PRODUCTS:', action.products)
      newState = { ...state, products: action.products }
      break

    case 'SET_COUNT_PRODUCTS':
      // console.log('SET_COUNT_PRODUCTS:', action.products)
      newState = { ...state, countProducts: action.products }
      break
    case 'REMOVE_PRODUCT':
      console.log('REMOVE_PRODUCT:', action.productId)
      const lastRemovedProduct = state.products.find(
        (product) => product._id === action.productId
      )
      products = state.products.filter(
        (product) => product._id !== action.productId
      )
      state.garbages.unshift(lastRemovedProduct)
      newState = { ...state, products }
      break
    case 'ADD_PRODUCT':
      console.log('ADD_PRODUCT:', action.product)
      newState = { ...state, products: [...state.products, action.product] }
      break
    case 'UPDATE_PRODUCT':
      products = state.products.map((product) =>
        product._id === action.product._id ? action.product : product
      )
      newState = { ...state, products }
      break
    case 'ADD_TO_CART':
      newState = { ...state, cart: [...state.cart, action.product] }
      break
    case 'REMOVE_FROM_CART':
      cart = state.cart.filter((product) => product._id !== action.productId)
      newState = { ...state, cart }
      break
    case 'CLEAR_CART':
      newState = { ...state, cart: [] }
      break
    case 'SET_SELECT_PRODUCT':
      console.log('action.product:', action.product)
      newState = { ...state, selectedProduct: action.product }
      break
    case 'UNDO_REMOVE_PRODUCT':
      if (state.lastRemovedProduct) {
        newState = {
          ...state,
          products: [...state.products, state.lastRemovedProduct],
          lastRemovedProduct: null,
        }
      }
      break
    case 'IS_EDIT':
      console.log('IS_EDIT:', action.ans)
      newState = { ...state, isEditor: action.ans }
      break
    default:
  }
  // For debug:
  window.productState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  return newState
}

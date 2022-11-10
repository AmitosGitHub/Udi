import { productService } from '../services/product.service.js'
import { userService } from '../services/user.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// Action Creators:
export function getActionRemoveProduct(productId) {
  return {
    type: 'REMOVE_PRODUCT',
    productId: productId,
  }
}
export function getActionAddProduct(product) {
  console.log('getActionAddProduct:')
  return {
    type: 'ADD_PRODUCT',
    product,
  }
}
export function getActionUpdateProduct(product) {
  return {
    type: 'UPDATE_PRODUCT',
    product,
  }
}

export function loadProducts(filterBy) {
  return async (dispatch) => {
    try {
      // console.log('filterBy from action2:', filterBy)
      const products = await productService.query(filterBy)
      // console.log('Products from DB action:', products)
      dispatch({
        type: 'SET_PRODUCTS',
        products,
      })
    } catch (err) {
      showErrorMsg('Cannot load products')
      console.log('Cannot load products', err)
    }
  }
}

export function getCountProducts(filterBy) {
  console.log('filterBy from action:', filterBy)
  return async (dispatch) => {
    try {
      console.log('filterBy from action2:', filterBy)
      const products = await productService.query(filterBy)
      // console.log('Products from DB action:', products)
      dispatch({
        type: 'SET_COUNT_PRODUCTS',
        products,
      })
    } catch (err) {
      showErrorMsg('Cannot load products')
      console.log('Cannot load products', err)
    }
  }
}

export function removeProduct(productId) {
  console.log('productId:', productId)
  return async (dispatch) => {
    try {
      await productService.remove(productId)
      console.log('Deleted Succesfully!')
      dispatch(getActionRemoveProduct(productId))
      showSuccessMsg('Product removed')
    } catch (err) {
      showErrorMsg('Cannot remove product')
      console.log('Cannot remove product', err)
    }
  }
}

export function addProduct(product) {
  console.log('addProduct(product):', product)
  return async (dispatch) => {
    try {
      const savedProduct = await productService.save(product)
      console.log('Added Product', savedProduct)
      dispatch(getActionAddProduct(savedProduct))
      showSuccessMsg('Product added')
    } catch (err) {
      showErrorMsg('Cannot add product')
      console.log('Cannot add product', err)
    }
  }
}

export function updateProduct(product) {
  return async (dispatch) => {
    try {
      const savedProduct = await productService.save(product)
      console.log('Updated Product:', savedProduct)
      dispatch(getActionUpdateProduct(savedProduct))
      showSuccessMsg('Product updated')
    } catch (err) {
      showErrorMsg('Cannot update product')
      console.log('Cannot save product', err)
    }
  }
}

export function getProductById(productId) {
  console.log('productId:', productId)
  return async (dispatch) => {
    try {
      const product = await productService.getById(productId)
      console.log('product:', product)
      dispatch({
        type: 'SET_SELECT_PRODUCT',
        product,
      })
    } catch (err) {
      showErrorMsg('Cannot get product')
      console.log('Cannot save product', err)
    }
  }
}

export function getProductByHostId(user) {
  console.log('user:', user)
  return async (dispatch) => {
    try {
      const product = await productService.getByHostId(user)
      console.log('product:', product)
      dispatch({
        type: 'SET_SELECT_PRODUCT',
        product,
      })
    } catch (err) {
      showErrorMsg('Cannot get product')
      console.log('Cannot save product', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    try {
      const products = await productService.query(filterBy)
      console.log('filter Product:', products)
      dispatch({
        type: 'SET_PRODUCTS',
        products,
      })
      showSuccessMsg(' filter!!!')
    } catch (err) {
      showErrorMsg('Cannot filter products')
      console.log('Cannot filter product', err)
    }
  }
}

// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveProductOptimistic(productId) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      productId: productId,
    })
    showSuccessMsg('Product removed')

    productService
      .remove(productId)
      .then(() => {
        console.log('Server Reported - Deleted Succesfully')
      })
      .catch((err) => {
        showErrorMsg('Cannot remove product')
        console.log('Cannot load products', err)
        dispatch({
          type: 'UNDO_REMOVE_PRODUCT',
        })
      })
  }
}

export function setIsEditorStore(ans) {
  console.log('ans', ans)
  return async (dispatch) => {
    try {
      dispatch({
        type: 'IS_EDIT',
        ans,
      })
    } catch (err) {
      showErrorMsg('Cannot editor now')
      console.log('Cannot editor now', err)
    }
  }
}

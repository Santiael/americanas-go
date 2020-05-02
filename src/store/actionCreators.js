import actionTypes from './actionTypes';

export function addProduct(product) {
  return {
    type: actionTypes.addProduct,
    payload: {
      product,
    },
  };
}

export function removeProduct(id) {
  return {
    type: actionTypes.removeProduct,
    payload: {
      id,
    },
  };
}

export function deleteProduct(id) {
  return {
    type: actionTypes.deleteProduct,
    payload: {
      id,
    },
  };
}

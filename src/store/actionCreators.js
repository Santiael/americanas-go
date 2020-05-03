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

export function increaseAmount(id) {
  return {
    type: actionTypes.increaseAmount,
    payload: {
      id,
    },
  };
}

export function decreaseAmount(id) {
  return {
    type: actionTypes.decreaseAmount,
    payload: {
      id,
    },
  };
}

export function setDiscount(discount) {
  return {
    type: actionTypes.setDiscount,
    payload: {
      discount,
    },
  };
}

export function clearCart() {
  return {
    type: actionTypes.clearCart,
    payload: {},
  };
}

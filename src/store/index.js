import React, { createContext, useReducer } from 'react';
import produce from 'immer';

import actionTypes from './actionTypes';

import initialProducts from '../constants/products';

const initialProductsTotal = initialProducts
  .reduce((acc, item) => acc + item.price * item.amount, 0)
  .toFixed(2);

const initialState = {
  products: initialProducts,
  cartTotal: initialProductsTotal,
  paymentTotal: initialProductsTotal,
  discount: 0,
};

const store = createContext();
const { Provider } = store;

function StoreReducer(state, action) {
  return produce(state, (draft) => {
    const { id, product, discount } = action.payload;
    let productFound = null;

    draft.discount = 0;

    switch (action.type) {
      case actionTypes.addProduct:
        productFound = draft.products.find((p) => p.id === product.id);

        if (productFound && productFound.stock > productFound.amount)
          Object.assign(productFound, product);
        else draft.products.push(product);
        break;

      case actionTypes.removeProduct:
        draft.products = draft.products.filter((p) => p.id !== id);
        break;

      case actionTypes.increaseAmount:
        productFound = draft.products.find((p) => p.id === id);

        if (productFound && productFound.amount < productFound.stock)
          productFound.amount += 1;
        break;

      case actionTypes.decreaseAmount:
        productFound = draft.products.find((p) => p.id === id);

        if (productFound && productFound.amount > 1) productFound.amount -= 1;
        break;

      case actionTypes.setDiscount:
        draft.discount = discount.toFixed(2);
        break;

      case actionTypes.clearCart:
        draft = {
          products: [],
          cartTotal: 0,
          paymentTotal: 0,
          discount: 0,
        };
        break;

      default:
        throw new Error();
    }

    draft.cartTotal = draft.products
      .reduce((acc, item) => acc + item.price * item.amount, 0)
      .toFixed(2);

    draft.paymentTotal = (draft.cartTotal - draft.discount).toFixed(2);
  });
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StoreProvider };

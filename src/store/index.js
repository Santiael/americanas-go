import React, { createContext, useReducer } from 'react';
import produce from 'immer';

import actionTypes from './actionTypes';

import products from '../constants/products';

const initialState = {
  products,
};

const store = createContext();
const { Provider } = store;

function StoreReducer(state, action) {
  return produce(state, (draft) => {
    const { id, product } = action.payload;
    let productFound = null;

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

      default:
        throw new Error();
    }
  });
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StoreProvider };

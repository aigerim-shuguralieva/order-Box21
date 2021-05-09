import { ADD_ORDER } from "../actions";

const defaultState = {
  orders: [],
  totalPrice: 0,
  totalCount: 0,
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders,
          {
            title: action.payload.title,
            price: action.payload.price,
          },
        ],
      };
    default:
      return state;
  }
};

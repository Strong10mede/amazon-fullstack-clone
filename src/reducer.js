export const initialState = {
  basket: [],
  user: null,
};

//selector
//used for the subtotal
//reduce taking amount var with init value 0 and iterating every item and adding its item.price into amount
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //addtion into the basket
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      //returning the empty basket
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      //removal ofone item from the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      //setting up the user
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

const {products} =  require('./data.json');
const cartKeys = Object.keys(products)
const cartObj = cartKeys.reduce((o, key) => ({ ...o, [key]: 0}), {})
const INITIAL_STATE = cartObj

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
        return { ...state, [action.payload]: state[action.payload] + 1 }
    case 'REMOVE_FROM_CART':
        if(state[action.payload] > 0) {
        return { ...state, [action.payload]: state[action.payload] - 1 }}
    default:
        return state
  }
}


export default rootReducer;
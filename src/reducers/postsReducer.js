export default function postReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'CREATE_POSTS':
      return [...state, action.payload];
    default:
      return state;
  }
}

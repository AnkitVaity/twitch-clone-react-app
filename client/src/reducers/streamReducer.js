import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      return {...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return {...state, [action.payload.id]: action.payload };
    case 'FETCH_STREAMS':
      return {...state, ..._.mapKeys(action.payload, 'id')}; // This will create a key value pair of every stream with key beigh the id
    case 'DELETE_STREAM':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

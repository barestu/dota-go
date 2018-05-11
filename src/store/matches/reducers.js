import {
  FETCH_MATCHES_LOADING,
  FETCH_MATCHES_FAILED,
  FETCH_MATCHES_DONE
} from './action.types';

const initialState = {
  data: [],
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const matchesReducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case FETCH_MATCHES_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_MATCHES_FAILED:
      let errObj = { status: true, message: action.payload }

      return {
        ...state,
        loading: false,
        error: errObj
      }
    case FETCH_MATCHES_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default matchesReducers
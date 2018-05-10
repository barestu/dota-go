import {
  FETCH_DATA_LOADING,
  FETCH_DATA_FAILED,
  FETCH_HEROES_DONE
} from './action.types';

const initialState = {
  data: [],
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const heroesReducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA_FAILED:
      let errObj = { status: true, message: action.payload }

      return {
        ...state,
        loading: false,
        error: errObj
      }
    case FETCH_HEROES_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default heroesReducers
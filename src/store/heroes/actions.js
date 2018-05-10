import axios from 'axios'
import {
  FETCH_DATA_LOADING,
  FETCH_DATA_FAILED,
  FETCH_HEROES_DONE
} from './action.types';

export const fetchHeroes = () => {
  return dispatch => {
    dispatch(fetchDataLoading())
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({ data }) => {
        console.log(data)
        dispatch(fetchHeroesDone(data))
      })
      .catch(err => {
        alert('Fetch data failed')
        dispatch(fetchDataFailed(err))
        console.log(err)
      })
  }
}

const fetchDataLoading = () => ({
  type: FETCH_DATA_LOADING
})

const fetchDataFailed = (err) => ({
  type: FETCH_DATA_FAILED,
  payload: err.message
})

const fetchHeroesDone = (heroes) => ({
  type: FETCH_HEROES_DONE,
  payload: heroes
})
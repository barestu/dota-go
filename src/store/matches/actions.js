import axios from 'axios'
import {
  FETCH_MATCHES_LOADING,
  FETCH_MATCHES_FAILED,
  FETCH_MATCHES_DONE
} from './action.types';

export const fetchMatches = () => {
  return dispatch => {
    dispatch(fetchDataLoading())
    axios.get('https://api.opendota.com/api/publicMatches')
      .then(({ data }) => {
        console.log(data)
        dispatch(fetchMatchesDone(data))
      })
      .catch(err => {
        alert('Fetch data failed')
        dispatch(fetchDataFailed(err))
        console.log(err)
      })
  }
}

const fetchDataLoading = () => ({
  type: FETCH_MATCHES_LOADING
})

const fetchDataFailed = (err) => ({
  type: FETCH_MATCHES_FAILED,
  payload: err.message
})

const fetchMatchesDone = (heroes) => ({
  type: FETCH_MATCHES_DONE,
  payload: heroes
})
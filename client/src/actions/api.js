import * as types from './action-types';
import fetch from 'isomorphic-fetch'

const ENDPOINT = 'https://www.interactiveshaderformat.com/api/v1';
// const ENDPOINT = 'http://localhost:5001/api/v1';

function requestPosts() {
  return {
    type: types.FETCH_POPULAR
  }
}

const receivePosts = (sketches) => {
  return {
    type: types.FETCH_POPULAR_SUCCESS,
    sketches: sketches
  }
}

export const fetchPopular = () => {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`${ENDPOINT}/search?category=Generator&order=newest&offset=0&limit=20`, {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
  }
}


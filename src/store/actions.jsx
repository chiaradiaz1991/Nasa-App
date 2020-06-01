import axios from 'axios';

export const start = 'START '
export const success = 'SUCCESS '
export const failure = 'FAILURE '

const API_KEY='api_key=DEMO_KEY';

export const getPhoto = () => ( dispatch ) => {
  dispatch({type: start});

  axios.get(`https://api.nasa.gov/planetary/apod?${API_KEY}`)
    .then(res => dispatch({ 
      type: success,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: failure,
      payload: err
    }))
}


import { start, success, failure } from './actions';


const initialState = {
  appTitle: "NASA photo of the day",
  photoOfTheDay: null,
  error: '',
  isLoading: false,
}

const reducer = (state= initialState, action) =>{
  switch(action.type){
    case start: {
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    }
    case success: {
      return {
        ...state,
        error: '',
        photoOfTheDay: action.payload,
        isLoading: false,
      }
    }
    case failure: {
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
      }
    }
    default: return state;
  }
}

export default reducer;
import * as actionType from '../constants/actionType';

const applicantAuthReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTHA:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    
    default:
      return state;
  }
};

export default applicantAuthReducer;
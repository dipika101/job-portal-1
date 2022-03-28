import { AUTHA, APPLY } from '../constants/actionType';
import * as api from '../api/index.js';

export const signinapp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signInApplicant(formData);

    dispatch({ type: AUTHA, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signupapp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUpApplicant(formData);

    dispatch({ type: AUTHA, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const applyPost = (post) =>  async(dispatch) =>{
  try {
      const {data} = await api.applyPost(post);
      dispatch({type : APPLY, payload: data});
  } catch (error) {
      console.log(error.message);
  }
}
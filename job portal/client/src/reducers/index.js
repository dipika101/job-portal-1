import { combineReducers } from 'redux';

import posts from './posts';
import authReducer from './auth';
import applicantAuthReducer from './applicantAuth';

export const reducers = combineReducers({ posts, authReducer, applicantAuthReducer});
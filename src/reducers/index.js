// -*- mode: react; -*-
import { combineReducers } from 'redux';
import auth from './auth';
import donate from './donate';
import modal from './modal';

export default combineReducers({
  auth,
  donate,
  modal
});

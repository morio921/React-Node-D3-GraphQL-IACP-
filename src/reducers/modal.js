/**  -*- mode: react; -*-
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../constants/modal';

// Please refer to server.js for real initial state
// this only for redux doc compliance
const initialState = {
  showModal: false
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
}

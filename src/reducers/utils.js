import { SET_U } from '../constants/actionTypes';

export default (utils={title:"Memories"}, action) => {
  switch (action.type) {
    case SET_U:
        return {title:action.payload};
    default:
      return utils;
  }
};


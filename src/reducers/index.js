import { combineReducers } from 'redux';

import posts from './posts';
import users from './users';
import utils from './utils';

export const reducers = combineReducers({ posts,users,utils });

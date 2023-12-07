import {GET_RECENT_SEARCH} from './constants';

export const getRecentSearchAction = data => {
  return {
    type: GET_RECENT_SEARCH,
    payload: data,
  };
};

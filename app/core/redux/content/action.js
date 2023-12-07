import {GET_RECENT_SEARCH} from './constants';

export const getRecentSearchAction = data => {
  console.log('data in action params:>> ', data);
  return {
    type: GET_RECENT_SEARCH,
    payload: data,
  };
};

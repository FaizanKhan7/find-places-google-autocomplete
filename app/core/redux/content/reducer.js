const {GET_RECENT_SEARCH} = require('./constants');

const initialState = {
  recentSearches: {},
};

const searchState = (state = initialState, action = {}) => {
  console.log('action.payload :>> ', action.payload);
  switch (action.type) {
    case GET_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: action.paylooad,
      };
    default:
      state;
  }
};

export {searchState};

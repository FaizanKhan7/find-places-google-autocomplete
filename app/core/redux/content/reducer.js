const {GET_RECENT_SEARCH} = require('./constants');

const initialState = {
  recentSearches: {},
};

const searchState = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: [...state.recentSearches, action.payload],
      };
    default:
      state;
  }
};

export {searchState};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'title-asc'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_TITLE_ASC':
      return {
        ...state,
        sortBy: 'title-asc'
      };
    case 'SORT_BY_TITLE_DESC':
      return {
        ...state,
        sortBy: 'title-desc'
      };
    case 'SORT_BY_PLATFORM_ASC':
      return {
        ...state,
        sortBy: 'platform-asc'
      };
    case 'SORT_BY_PLATFORM_DESC':
      return {
        ...state,
        sortBy: 'platform-desc'
      };
    case 'SORT_BY_GENRE':
      return {
        ...state,
        sortBy: 'genre'
      };
    case 'SORT_BY_RELEASE_DESC':
      return {
        ...state,
        sortBy: 'release-desc'
      };
    case 'SORT_BY_RELEASE_ASC':
      return {
        ...state,
        sortBy: 'release-asc'
      };
    default:
      return state;
  }
};

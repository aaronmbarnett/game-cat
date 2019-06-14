export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByTitleAsc = () => ({
  type: 'SORT_BY_TITLE_ASC'
});

export const sortByTitleDesc = () => ({
  type: 'SORT_BY_TITLE_DESC'
});

export const sortByPlatformAsc = () => ({
  type: 'SORT_BY_PLATFORM_ASC'
});

export const sortByPlatformDesc = () => ({
  type: 'SORT_BY_PLATFORM_DESC'
});

export const sortByReleaseDesc = () => ({
  type: 'SORT_BY_RELEASE_DESC'
});

export const sortByReleaseAsc = () => ({
  type: 'SORT_BY_RELEASE_ASC'
});

export const sortByGenre = () => ({
  type: 'SORT_BY_GENRE'
});

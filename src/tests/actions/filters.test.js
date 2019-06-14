import {
  setTextFilter,
  sortByTitleAsc,
  sortByTitleDesc,
  sortByPlatformAsc,
  sortByPlatformDesc,
  sortByReleaseAsc,
  sortByReleaseDesc,
  sortByGenre
} from '../../actions/filters';

test('should create setTextFilter action', () => {
  const text = 'Test text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should create sortByTitleAsc action', () => {
  const action = sortByTitleAsc();
  expect(action).toEqual({
    type: 'SORT_BY_TITLE_ASC'
  });
});

test('should create sortByTitleDesc action', () => {
  const action = sortByTitleDesc();
  expect(action).toEqual({
    type: 'SORT_BY_TITLE_DESC'
  });
});

test('should create sortByPlatformAsc action', () => {
  const action = sortByPlatformAsc();
  expect(action).toEqual({
    type: 'SORT_BY_PLATFORM_ASC'
  });
});

test('should create sortByPlatformDesc action', () => {
  const action = sortByPlatformDesc();
  expect(action).toEqual({
    type: 'SORT_BY_PLATFORM_DESC'
  });
});

test('should create sortByReleaseAsc action', () => {
  const action = sortByReleaseAsc();
  expect(action).toEqual({
    type: 'SORT_BY_RELEASE_ASC'
  });
});

test('should create sortByReleaseDesc action', () => {
  const action = sortByReleaseDesc();
  expect(action).toEqual({
    type: 'SORT_BY_RELEASE_DESC'
  });
});

test('should create sortByGenre action', () => {
  const action = sortByGenre();
  expect(action).toEqual({
    type: 'SORT_BY_GENRE'
  });
});

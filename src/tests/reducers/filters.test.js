import filtersReducer from '../../reducers/filters';

test('should set up default filter state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'title-asc'
  });
});

test('should set text filter', () => {
  const text = 'Test filter text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const currentState = {
    text: '',
    sortBy: 'release-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state.text).toBe(text);
});

test('should set sortBy to title ascending', () => {
  const action = {
    type: 'SORT_BY_TITLE_ASC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-desc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'title-asc'
  });
});

test('should set sortBy to title descending', () => {
  const action = {
    type: 'SORT_BY_TITLE_DESC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'title-desc'
  });
});

test('should set sortBy to platform ascending', () => {
  const action = {
    type: 'SORT_BY_PLATFORM_ASC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'platform-asc'
  });
});

test('should set sortBy to platform descending', () => {
  const action = {
    type: 'SORT_BY_PLATFORM_DESC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'platform-desc'
  });
});

test('should set sortBy to release ascending', () => {
  const action = {
    type: 'SORT_BY_RELEASE_ASC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'release-asc'
  });
});

test('should set sortBy to release descending', () => {
  const action = {
    type: 'SORT_BY_RELEASE_DESC'
  };
  const currentState = {
    text: '',
    sortBy: 'title-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'release-desc'
  });
});

test('should set sortBy to genre', () => {
  const action = {
    type: 'SORT_BY_GENRE'
  };
  const currentState = {
    text: '',
    sortBy: 'release-asc'
  };

  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'genre'
  });
});

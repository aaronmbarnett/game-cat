import gamesReducer from '../../reducers/games';
import games from '../fixtures/games';

test('should set up default state', () => {
  const state = gamesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a game', () => {
  const game = {
    id: '4',
    title: 'Super Smash Bros. Melee',
    platform: 'GCN',
    release: 2002
  };

  const action = {
    type: 'ADD_GAME',
    game
  };

  const state = gamesReducer(games, action);
  expect(state).toEqual([...games, game]);
});

test('should edit a game', () => {
  const game = games[0];
  const title = 'F-Zero';

  const action = {
    type: 'EDIT_GAME',
    id: game.id,
    updates: {
      title
    }
  };

  const state = gamesReducer(games, action);
  expect(state[0].title).toBe(title);
});

test('should remove a game', () => {
  const id = games[1].id;
  const action = {
    type: 'REMOVE_GAME',
    id
  };

  const state = gamesReducer(games, action);
  expect(state).toEqual([games[0], games[2]]);
});

test('should NOT remove a game', () => {
  const id = 'b8t4';
  const action = {
    type: 'REMOVE_GAME',
    id
  };

  const state = gamesReducer(games, action);
  expect(state).toEqual(games);
});

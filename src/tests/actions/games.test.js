import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addGame,
  startAddGame,
  editGame,
  startEditGame,
  removeGame,
  startRemoveGame,
  setGames,
  startSetGames
} from '../../actions/games';
import games from '../fixtures/games';
import database from '../../firebase/firebase';

const uid = 'abc123';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const gamesData = [];
  games.forEach(({ id, title, genre, platform, release }) => {
    gamesData[id] = { title, genre, platform, release };
  });
  database
    .ref(`users/${uid}/games`)
    .set(gamesData)
    .then(() => done());
});

test('should create add game action', () => {
  const gameData = {
    title: 'NBA Jam',
    release: 1993,
    genre: 'Sports',
    platform: 'Super Nintendo'
  };
  const action = addGame(gameData);
  expect(action).toEqual({
    type: 'ADD_GAME',
    game: {
      ...gameData
    }
  });
});

test('should add game to firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const gameData = {
    title: 'Mario Party',
    release: 1990,
    genre: 'Party',
    platform: 'Nintendo 64'
  };
  store
    .dispatch(startAddGame(gameData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_GAME',
        game: {
          id: expect.any(String),
          ...gameData
        }
      });

      return database
        .ref(`users/${uid}/games/${actions[0].game.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(gameData);
      done();
    });
});

test('should create edit game action', () => {
  const action = editGame(uid, { genre: 'RPG' });
  expect(action).toEqual({
    type: 'EDIT_GAME',
    id: uid,
    updates: { genre: 'RPG' }
  });
});

test('should edit game in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = games[1].id;

  const updates = {
    title: 'New Title',
    release: 1990
  };
  store
    .dispatch(startEditGame(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_GAME',
        id,
        updates
      });
      return database.ref(`users/${uid}/games/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().title).toBe(updates.title);
      expect(snapshot.val().release).toBe(updates.release);
      done();
    });
});

test('should create remove game action', () => {
  const id = '12345';
  const action = removeGame({ id });
  expect(action).toEqual({
    type: 'REMOVE_GAME',
    id
  });
});

test('should remove game from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = games[0].id;
  store
    .dispatch(startRemoveGame({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_GAME',
        id
      });
      return database.ref(`users/${uid}/games/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should grab the list of games from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetGames()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_GAMES',
      games
    });
    done();
  });
});

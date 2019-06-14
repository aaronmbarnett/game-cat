import database from '../firebase/firebase';

// Add a game
export const addGame = (game) => ({
  type: 'ADD_GAME',
  game
});

export const startAddGame = (gameData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = '', platform = '', release = '', genre = '' } = gameData;
    const game = { title, platform, release, genre };

    return database
      .ref(`users/${uid}/games`)
      .push(game)
      .then((ref) => {
        dispatch(
          addGame({
            id: ref.key,
            ...game
          })
        );
      });
  };
};

// Remove a game
export const removeGame = ({ id } = {}) => ({
  type: 'REMOVE_GAME',
  id
});

export const startRemoveGame = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/games/${id}`)
      .remove()
      .then(() => dispatch(removeGame({ id })));
  };
};

// Edit a game
export const editGame = (id, updates) => ({
  type: 'EDIT_GAME',
  id,
  updates
});

export const startEditGame = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/games/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editGame(id, updates));
      });
  };
};

// Set up the catalogue of games
export const setGames = (games) => ({
  type: 'SET_GAMES',
  games
});

export const startSetGames = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/games`)
      .once('value')
      .then((snapshot) => {
        const gameData = [];

        snapshot.forEach((childSnapshot) => {
          gameData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setGames(gameData));
      });
  };
};

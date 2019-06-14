import authReducer from '../../reducers/auth';

test('should set user id on login', () => {
  const uid = 'V89dj3JklLC8k3';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, action);
  expect(state).toEqual({
    uid
  });
});

test('should clear user id on logout', () => {
  const uid = 'V89dj3JklLC8k3';
  let state = {
    uid
  };
  const action = {
    type: 'LOGOUT'
  };

  state = authReducer({ uid: '1234' }, action);
  expect(state).toEqual({});
});

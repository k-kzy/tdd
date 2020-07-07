'use strict';

jest.mock('../request');

import * as user from '../user';


// promise resolves
it('promise test', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('promise .resolves test', () => {
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// async / await
it('async/await test', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual('Mark');
})

it('async/await .resolves test', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// promise error
it('promise error test', () => {
  expect.assertions(1);
  return user.getUserName(2).catch(e =>
    expect(e).toEqual({
      error: 'User with 2 not found.',
    }),
  );
})

// async/await error try/catch
it('async/await error test', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
})

// promise rejects
it('promise rejects test', () => {
  expect.assertions(1);
  return expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});

// async/await rejects
it('async/await rejects test', async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});

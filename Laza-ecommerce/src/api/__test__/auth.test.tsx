import { jest } from '@jest/globals';

import { authService } from 'api/auth.api';

import { user } from '__mocks__/dataMock/user';
import http from 'api/http';

jest.mock('api/http');

describe('Test auth api', () => {
  const mockedAxios = http as jest.Mocked<typeof http>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  const username = 'Quangpham';
  const password = '123456';
  test('should call function sign in', async () => {
    jest.fn().mockImplementation(() => Promise.resolve({ data: [user] }));
    await authService.signIn(username, password);
  });

  test('should call function signOut', async () => {
    jest.fn().mockImplementation(() => Promise.resolve({ data: [] }));

    await authService.signOut();
  });
});

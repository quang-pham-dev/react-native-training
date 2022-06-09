import { jest } from '@jest/globals';

// API
import { authService } from 'api/auth';

// Mocks
import { user } from '__mocks__/dataMock/user';

describe('Test auth api', () => {
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

import { User } from './user';

describe('UserModel', () => {
  it('should create an instance', () => {
    expect(new User('Leona', 26)).toBeTruthy();
  });
});

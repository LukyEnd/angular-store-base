import * as fromUser from '../user.actions';

describe('yUsers', () => {
  it('should return an action', () => {
    expect(fromUser.yUsers().type).toBe('[User] Y Users');
  });
});

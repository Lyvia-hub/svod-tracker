import { User } from './user';

describe('User', () => {
  let johnDoe: {};

  beforeEach(function () {
    johnDoe = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: 'ndjfhjfurrg',
      avatar: 'https://static.vecteezy.com/ti/vecteur-libre/p1/2002247-belle-femme-noire-avatar-icone-personnage-gratuit-vectoriel.jpg',
      hasNetflix: true,
      hasAmazon: true,
      hasDisney: true
    };
  })
  it('should create an instance', () => {
    expect(new User('1', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true)).toBeTruthy();
  });

  it('should create an instance with no properties', () => {
    expect(new User()).toBeTruthy();
    expect(new User()).toEqual(new User(undefined, '', '', '', '', false, false, false));
  });

  it('should contain object keys', () => {
    expect(Object.keys(new User('1', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('id');
    expect(Object.keys(new User('', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('name');
    expect(Object.keys(new User('3', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('password');
    expect(Object.keys(new User('4', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('avatar');
    expect(Object.keys(new User('5', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('hasNetflix');
    expect(Object.keys(new User('6', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('hasAmazon');
    expect(Object.keys(new User('7', 'untel', 'john.doe@gmail.com', 'jfkdhfjghf', 'bdfhfgyerfk', true, false, true))).toContain('hasDisney');
    expect(Object.keys(new User('john.doe@gmail.com'))).toContain('hasDisney');
  });


});



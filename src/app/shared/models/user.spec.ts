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
    expect(new User(
      {
        id: '1',
        name: 'john',
        email: 'john.doe@gmail.com',
        password: 'jfkdhfjghf',
        avatar: 'bdfhfgyerfk',
        hasNetflix: true,
        hasAmazon: true,
        hasDisney: true
      })).toBeTruthy();
  })


  it('should create an instance with no properties', () => {
    expect(new User()).toBeTruthy();
    expect(new User()).toEqual(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }));
  });

  it('should contain object keys', () => {
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('id');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('name');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('password');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('avatar');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('hasNetflix');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('hasAmazon');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('hasDisney');
    expect(Object.keys(new User({
      id: undefined,
      name: '',
      email: '',
      password: '',
      avatar: '',
      hasNetflix: false,
      hasAmazon: false,
      hasDisney: false
    }))).toContain('hasDisney');
  });


});



import { Program } from './program';

describe('Program', () => {

  beforeEach(function () {

  })

  it('should create an instance', () => {
    expect(new Program('1', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5)).toBeTruthy();
  });

  it('should create an instance with no properties', () => {
    expect(new Program()).toBeTruthy();
    expect(new Program()).toEqual(new Program(undefined, '', '', [], 0, [], '', '', '', 0));
  });

  it('should contain object keys', () => {
    expect(Object.keys(new Program('1', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('id');
    expect(Object.keys(new Program('', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('name');
    expect(Object.keys(new Program('2', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('type');
    expect(Object.keys(new Program('4', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('synopsis');
    expect(Object.keys(new Program('5', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('releaseDate');
    expect(Object.keys(new Program('6', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('platform');
    expect(Object.keys(new Program('7', 'Homeland', 'serie', ['Crime', 'Drama', 'Mystery'], 4, ['Claire Danes', 'Mandy Patinkin', ' Damian Lewis'], 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil', '2011', 'Netflix', 9.5))).toContain('rate');
    expect(Object.keys(new Program('homeland'))).toContain('numberOfSeasons');
  });
});

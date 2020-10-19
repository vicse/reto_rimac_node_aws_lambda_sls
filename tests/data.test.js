'use strict';

const data = require('../data');

describe('getPerson', () => {
  test('get existing person', async () => {

    const person = {
        personId: '039435eb-6342-4d0d-a474-9dfdc06ccb76',
        name: 'vicse',
        planetId: 1,
        specieId: 2,
        timestamp: 1603133400900
    }

    data.getPersonById = jest.fn().mockReturnValue(person);

    const result = await data.getPersonById('039435eb-6342-4d0d-a474-9dfdc06ccb76');

    expect(result).toBe(person);

  });
  
  
});

describe('getPeople', () => {
  test('get existing people', async () => {

    const people = [
    {
      personId: '039435eb-6342-4d0d-a474-9dfdc06ccb76',
      name: 'vicse',
      planetId: 1,
      specieId: 2,
      timestamp: 1603133400900
    }
    ,{
      personId: '039435eb-6342-4d0d-a474-9dfdc1231232',
      name: 'Jefer',
      planetId: 6,
      specieId: 8,
      timestamp: 1603133400991
    } ];

    data.getPeople = jest.fn().mockReturnValue(people);

    const result = await data.getPeople();

    expect(result).toBe(people);

  });
  
  
});

describe('createPerson', () => {
  test('craete person', async () => {

    const person = {
      personId: '039435eb-6342-4d0d-a474-9dfdc06ccb76',
      name: 'vicse',
      planetId: 1,
      specieId: 2,
      timestamp: 1603133400900
    }

    data.savePerson = jest.fn().mockReturnValue(person);

    const result = await data.savePerson();

    expect(result).toBe(person);

  });
  
  
});
import { createPerson } from '../handlers/createPerson';

const expect = global.expect;

describe('createPerson', () => {

    const person = {
        id: "cfc5f208-ca9e-4ed7-b40d-60339a136e5b",
        name: 'Vicse',
        specieId: 10,
        createdAt: "2020-10-27T21:56:13.621Z",
        status: "ACTIVE"
    }

    test('create a person when in sucess', async() => {

        data.getPersonById = jest.fn().mockReturnValue(person);
    
        const result = await createPerson(person);
    
        expect(result).toBe(person);
    
    });

});
import { DynamoDB } from "../../db/dynamodb";

describe('DynamoDB tests', () => {

    test('DynamoDB is an object', () => {
        expect(typeof DynamoDB).toBe('object');
    });
    
    test('DynamoDB has get, put and scan', () => {
        expect(typeof DynamoDB.get).toBe('function');
        expect(typeof DynamoDB.put).toBe('function');
        expect(typeof DynamoDB.scan).toBe('function');
    });

    const validTableName = 'PeopleTable-dev';
    const data = {id: "f628f7c9-d598-494f-99fe-c59edefc1b30", name: "Abigail", specieId: 5 };
    const list = [{id: "f628f7c9-d598-494f-99fe-c59edefc1b30", name: "Abigail", specieId: 5 }];

    test('DynamoDB put works', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.put(data, validTableName);
            expect(res).toBe(data);
        } catch (error) {
            console.log('error in DynamoDB put test', error);
        }
    });

    test('DynamoDB get works', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.get(data.id, validTableName);
            expect(res).toEqual(data);
        } catch (error) {
            console.log('error in DynamoDB get', error);
        }
    });

    test('DynamoDB scan works', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.scan(validTableName);
            expect(res).toEqual(list);
        } catch (error) {
            console.log('error in DynamoDB scan', error);
        }
    });

});
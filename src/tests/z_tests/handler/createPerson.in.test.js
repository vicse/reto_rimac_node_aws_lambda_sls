import { handler } from '../../../handlers/createPerson';

import eventGenerator from '../testUtils/eventGenerator';
import validators from '../testUtils/validators';

describe('create a Person integration tests', () => {

    test('it shoudl take a body and return an API Gateway response', async () => {

        const event = eventGenerator({
            body: {
                name: 'vicse',
                specieId: 1
            },
        });

        const res = await handler(event);

        expect(res).toBeDefined();
        expect(validators.isApiGatewayResponse(res)).toBe(true);
        
    });

    test('should return a 201 with person is valid', async () => {
        const event = eventGenerator({
            body: {
                name: 'vicse',
                specieId: 2,
            }
        });
        const res = await handler(event);

        expect(res.statusCode).toBe(201);
        const body = JSON.parse(res.body);
        expect(body.name).toEqual('vicse');
        expect(body.status).toEqual('ACTIVE');
    });
    

});
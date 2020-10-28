import { DynamoDB } from "../db/dynamodb";

import { v4 as uuid } from 'uuid';

import createError from 'http-errors';

const tableName = process.env.PEOPLE_TABLE_NAME;

async function createPerson(event, context) {

  const { name, specieId } = JSON.parse(event.body);
  const now = new Date();

  const newPerson = {
    id: uuid(),
    name,
    specieId,
    status: 'ACTIVE',
    createdAt: now.toISOString(),
  };

  await DynamoDB.put(newPerson, tableName)
    .catch(err => {
      console.error(err);
      throw new createError.InternalServerError(err);
    });
  
  return {
    statusCode: 201,
    body: JSON.stringify(newPerson),
  };
}

export const handler = createPerson;



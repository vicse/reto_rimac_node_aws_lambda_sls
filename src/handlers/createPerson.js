import { v4 as uuid } from 'uuid';

import AWS from 'aws-sdk';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createPerson(event, context) {

  const { name, specieId } = JSON.parse(event.body);
  const now = new Date();

  const person = {
    id: uuid(),
    name,
    specieId,
    status: 'ACTIVE',
    createdAt: now.toISOString(),
  };

  try {
    await dynamodb.put({
      TableName: process.env.PEOPLE_TABLE_NAME,
      Item: person
    }).promise();
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  };
  
  return {
    statusCode: 201,
    body: JSON.stringify(person),
  };
}

export const handler = createPerson;



import AWS from 'aws-sdk';
import createError from 'http-errors';
import { getSpecie } from './getSpecie';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getPerson(event, context) {

  let person;
  const { id } = event.pathParameters; 

  try {
    const result = await dynamodb.get({
        TableName: process.env.PEOPLE_TABLE_NAME,
        Key: { id }
    }).promise();

    person = result.Item;

    if (!person) {
      throw new createError.NotFound(`Person with id "${id}" not found!`)  
    }

    person.specie = await getSpecie(person.specieId);

  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
}

export const handler = getPerson;



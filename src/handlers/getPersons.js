import AWS from 'aws-sdk';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getPersons(event, context) {

    let persons;

    try {
        const result = await dynamodb.scan({ 
            TableName: process.env.PEOPLE_TABLE_NAME 
        }).promise();

        persons = result.Items;

    } catch (error) {
        console.error(error);
        throw new createError.InternalServerError(error);
    }

  return {
    statusCode: 200,
    body: JSON.stringify(persons),
  };
}

export const handler = getPersons;



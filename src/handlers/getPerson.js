import AWS from 'aws-sdk';
import createError from 'http-errors';
import axios from 'axios';

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

    axios.get(`https://swapi.py4e.com/api/species/${person.specieId}`)
      .then(response => {
          console.log(response.data);
          console.log(response.data.explanation);
          person.specie = response.data;
      })
      .catch(error => {
        console.log(error);
      });

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



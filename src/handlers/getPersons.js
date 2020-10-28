import { DynamoDB } from "../db/dynamodb";

import createError from "http-errors";

async function getPersons(event, context) {

  let persons = await DynamoDB
    .scan(process.env.PEOPLE_TABLE_NAME)
    .catch((err) => {
      console.log("error in Dynamo scan", err);
      throw new createError.InternalServerError(err);
    });

  return {
    statusCode: 200,
    body: JSON.stringify(persons),
  };
}

export const handler = getPersons;

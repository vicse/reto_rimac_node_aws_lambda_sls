import { DynamoDB } from "../db/dynamodb";
import { getSpecie } from "../client/getSpecie";
import createError from "http-errors";

async function getPerson(event, context) {

  if (!event.pathParameters || !event.pathParameters.id) {
    // failed without an id
    return new createError.BadRequest("missing the id from the path");
  }

  const { id } = event.pathParameters;

  let person = await DynamoDB
    .get(id, process.env.PEOPLE_TABLE_NAME)
    .catch(err => {
      console.log("error in Dynamo get", err);
      throw new createError.InternalServerError(err);
    });

  if (!person) {
    throw new createError.NotFound(`Person with id "${id}" not found!`);
  }

  person.specie = await getSpecie(person.specieId);

  return {
    statusCode: 200,
    body: JSON.stringify(person),
  };
}

export const handler = getPerson;

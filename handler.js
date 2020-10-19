'use strict';

const { v4: uuidv4 } = require('uuid');
const data = require('./data');

const response = (statusCode, message) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}

module.exports.createPerson = (event, context, callback) => {

  console.log('Creando Persona Reto Rimac'); 

  const body = JSON.parse(event.body);

  const person = {
    personId: uuidv4(),
    name: body.name,
    planetId: body.planetId,
    specieId: body.specieId,
    createdAt: new Date().toISOString(),
  }

  data.savePerson(person)
    .then(person => {
      callback(null, response(201, person));
    })
    .catch((err) => response(null, response(err.statusCode, err)));

};

module.exports.getAllPeople = (event, context, callback) => {

  console.log('Listando Personas Reto Rimac');

  data.getPeople()
    .then((res) => {
      callback(null, response(200, res.Items));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));

};

module.exports.getPerson = (event, context, callback) => {

  console.log('Buscando Persona Reto Rimac');

  const id = event.pathParameters.id;

  data.getPersonById(id)
    .then((res) => {
      if (res.Item) callback(null, response(200, res.Item));
      else callback(null, response(404, { error: 'Persona no encontrada' }));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));

};

 
'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

/*
person : {
    personId: String,
    name: String,
    planetId: Number,
    specieId: Number,
    timestamp: timestamp
}
*/

module.exports.savePerson = person => {
    console.log('Guardando persona');

    const params = {
        TableName: process.env.PEOPLE_RIMAC_TABLE,
        Item: person
    };

    return dynamoDB.put(params).promise();

}

module.exports.getPeople = () => {
    console.log('Listando personas');

    const params = {
        TableName: process.env.PEOPLE_RIMAC_TABLE
    };

    return dynamoDB.scan(params).promise();

}

module.exports.getPersonById = (id) => {
    console.log('Buscando persona');

    const params = {
        Key: {
            personId: id
        },
        TableName: process.env.PEOPLE_RIMAC_TABLE
    };

    return dynamoDB.get(params).promise();

}

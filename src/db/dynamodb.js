import AWS from "aws-sdk";

let options = {};

if (process.env.JEST_WORKER_ID) {
  options = {
      endpoint: 'http://localhost:8000',
      region: 'local-env',
      sslEnabled: false,
  };
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

export const DynamoDB = {
  async get(ID, TableName) {
    const params = {
      TableName,
      Key: {
        id: ID,
      },
    };

    const data = await documentClient.get(params).promise();

    if (!data || !data.Item) {
      throw Error(
        `There was an error fetching person for ID of ${ID} from ${TableName}`
      );
    }

    return data.Item;
  },

  async put(data, TableName) {
    if (!data.name && !data.specieId) {
      throw Error("No name and specieId on the person");
    }

    const params = {
      TableName,
      Item: data,
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(
        `There was an error inserting ${data.name} in table ${TableName}`
      );
    }

    return data;
  },

  async scan(TableName) {
    const params = {
      TableName,
    };

    const data = await documentClient.scan(params).promise();

    if (!data || !data.Items) {
      throw Error(
        `There was an error fetching persons from ${TableName}`
      );
    }

    return data.Items;
  },
};


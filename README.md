# Rimac Challange Service

## Operaciones

| Operation | Type | URI |
| --------- | ---- | --- |
| Obtiene una persona  disponibles.| GET  | https://atew3wfjgb.execute-api.us-east-1.amazonaws.com/dev/person/:id |
| Registra una persona en DynamoDB. | POST  | https://atew3wfjgb.execute-api.us-east-1.amazonaws.com/dev/person |
| Obtiene la lista de personas disponibles. | GET  | https://atew3wfjgb.execute-api.us-east-1.amazonaws.com/dev/persons |

## Api's Consumidas

* SWAPI - The Star Wars API: https://swapi.py4e.com/documentation

## Plugins Serverless usados
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): 
Le permite aprovechar los pseudoparámetros de CloudFormation.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler basado en el complemento serverless-webpack: no requiere configuración y es totalmente compatible con las funciones de ES6 / ES7.

## Iniciando
Realizar el siguiente comando para instalar las dependencias

```
npm install
```


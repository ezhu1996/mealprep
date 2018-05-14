const util = require('util');
const fs = require('fs');
const alexaSDK = require('alexa-sdk');
const awsSDK = require('aws-sdk');


const recipesTable = 'Recipes';
const name = 'apples';
const userId = 'amzn1.ask.account.AFZBXPRQ4NS7EHQV3XECNKIDHUZEYEOMISBFYWTRGZP4AVDZQTQH5WYQSXXGVR6KPQYHGRP7FKOTURBPCST2UMGIEINTHRIJWKKCFBRMKZQCPUOS5I2BINH24SAISLTNPNG5GWR34YQ2Q3WLEJ6C6SJCDBAWP4NKQWTRATVPQPN7LNDRCWCVV3FH2VCT465WMQ7ZFVKCRTUIJUQ';
const location = 'index card';
const isQuick = true;

const docClient = new awsSDK.DynamoDB.DocumentClient();
const dbPut = util.promisify(docClient.put, docClient);

exports.handler = async (event) => {
    const stat = util.promisify(fs.stat);
 const dynamoParams = {
      TableName: recipesTable,
      Item: {
        Name: name,
        UserId: userId,
        Location: location,
        IsQuick: isQuick
      }
    };

    const checkIfRecipeExistsParams = {
      TableName: recipesTable,
      Key: {
        Name: name,
        UserId: userId
      }
    };
 return dbPut(dynamoParams);
  
};

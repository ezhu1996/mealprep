import boto3
import json
s3_client = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')
def lambda_handler(event, context):
    bucket = event['Records'][0]['s3']['bucket']['name']
    json_file_name = event['Records'][0]['s3']['object']['key']
    json_object = s3_client.get_object(Bucket=bucket,Key=json_file_name)
    jsonFileReader = json_object['Body'].read()
    jsonDict = json.loads(jsonFileReader)
    print("length is: " + str(len(jsonDict)))
    table = dynamodb.Table('RecipesScraped')
    for item in jsonDict:
        table.put_item(Item=item)
    #response = table.put_item(Item=jsonDict)
    print("response: "+response)
    print(bucket)
    print(json_file_name)
    print(str(event))
    return 'Hello from Lambda'

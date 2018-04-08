AWS.config.region = "us-east-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:a9cf0c68-62b0-4481-9d80-773d0cde2737',
});
AWS.config.credentials.get(function(){
    var syncClient = new AWS.CognitoSyncManager();
    syncClient.openOrCreateDataset('myDataset', function(err,dataset) {
        dataset.put('myKey', 'myValue', function(err,record){
            dataset.synchronize({
                onSuccess: function(data, newRecords) {

                }
            });
        });
    });
});
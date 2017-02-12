var AWS = require('aws-sdk');
var CognitoSDK = require('amazon-cognito-identity-js-node');

var env = require('./env.json');

var endpoint = 'cognito-idp.' + env.region + '.amazonaws.com/' + env.userpoolid;

AWS.config.region = env.region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({ IdentityPoolId: env.identitypoolid, Logins : {} });

var userPool = new CognitoSDK.CognitoUserPool({ UserPoolId : env.userpoolid, ClientId : env.clientid });
var cognitoUser = new CognitoSDK.CognitoUser({ Username : env.username, Pool : userPool });
var authenticationDetails = new CognitoSDK.AuthenticationDetails({ Username : env.username, Password : env.password });

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess: function (result) {
    AWS.config.credentials.params.Logins[endpoint] = result.getIdToken().getJwtToken();

    AWS.config.credentials.refresh((error) => {
      if (error) {
        console.error(error);

      } else {
        // Now we can get the AWS STS Tokens:
        console.log('export AWS_ACCESS_KEY_ID=\'' + AWS.config.credentials.accessKeyId + '\'')
        console.log('export AWS_SECRET_ACCESS_KEY=\'' + AWS.config.credentials.secretAccessKey + '\'')
        console.log('export AWS_SESSION_TOKEN=\'' + AWS.config.credentials.sessionToken + '\'')
        process.exit(0)
      }
    });

  },
  onFailure: function(err) {
    console.error(err.message);
    process.exit(1)
  },
});
  
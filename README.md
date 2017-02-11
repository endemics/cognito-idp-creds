# cognito-idp-creds

This nodejs app allows you to authenticate a user against AWS Cognito IdP (aka "Cognito Your User Pool") and export the temporary credentials.

The initial use case for this is to export credentials to be used in testing applications running on AWS API Gateway that are protected by Cognito Federated Identity (aka "Cognito"), of which Cognito IdP is one of the Federation Identities.

To run, this applicaton needs an `env.json` file containing the configuration. Its format is as follows:
```
{
	"username": $yourusername,
	"password": $yourpassword,
	"identitypoolid": $youridentitypoolid,
	"userpoolid": $youruserpoolid,
	"clientid": $yourclientid,
	"region": $yourawsregion,
}
```

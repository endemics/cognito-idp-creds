# cognito-idp-creds

This nodejs app allows you to authenticate a user against AWS Cognito IdP (aka "Cognito Your User Pool") and export the temporary credentials.

The initial use case for this is to export credentials to be used in testing applications running on AWS API Gateway that are protected by Cognito Federated Identity (aka "Cognito"), of which Cognito IdP is one of the Federation Identities.

To run, this application needs an `env.json` file containing the configuration. Its format is as follows:
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

## Usage

The easiest way to use this application is via a docker container.

You can build the container on your local machine via:
```
docker build -t cognito-idp-creds .
```

You can run it via:
```
docker run -it --rm cognito-idp-creds
```

If  you want to directly expose the credentials to your environment, you can use eval as such:
```bash
eval $(docker run -it --rm cognito-idp-creds)
```

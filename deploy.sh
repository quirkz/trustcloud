sam build
sam package --output-template-file packaged.yaml --s3-bucket 1ca10554-15ea-502c-a122-3fe66c1f1115
sam deploy   --template-file packaged.yaml --capabilities CAPABILITY_NAMED_IAM --stack-name braintrust-cloud --s3-bucket  1ca10554-15ea-502c-a122-3fe66c1f1115

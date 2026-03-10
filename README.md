## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

### Framework configuration (required for Next.js SSR)

If your Amplify build fails with **"Framework Web not supported"**, the app’s framework is set to static instead of Next.js SSR. Update it in the Amplify Console:

1. Open **Hosting** → **Build settings** → **Edit**
2. Set **Framework** to **Next.js - SSR**

Or via AWS CLI (replace `APP_ID` and `BRANCH_NAME`):

```bash
aws amplify update-branch --app-id APP_ID --branch-name BRANCH_NAME --framework "Next.js - SSR"
```

This app uses Next.js (supported by Amplify Hosting compute) and requires the SSR framework setting to deploy.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
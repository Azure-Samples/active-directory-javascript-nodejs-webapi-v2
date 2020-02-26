---
page_type: sample
languages:
- javascript
- node.js
products:
- microsoft-identity-platform
- azure-active-directory
description: "A simple Node.js web API demonstrating how to secure and expose an API using Azure AD (w/ v2 endpoint)"
urlFragment: "active-directory-javascript-nodejs-webapi-v2"
---

# Node.js Web API with Azure AD v2.0

This sample demonstrates how to protect a Node.js web API with Azure AD v2.0 using the Passport.js library. The code here is pre-configured with a registered client ID. If you register your own app, you will need to replace the client ID.

## Steps to Run

1. Clone the code.

```console
git clone https://github.com/Azure-Samples/active-directory-javascript-nodejs-webapi-v2
```

2. Make sure you've installed [Node.js](https://nodejs.org/en/download/).

3. Install the node dependencies:

```console
npm install && npm update
```

5. Run the Web API! By default it will run on `http://localhost:5000`

```console
npm start
```

## Next Steps

The `/hello` endpoint in this sample is protected so an authorized request to it requires an access token issued by Azure AD v2.0 in the header. You can [register your app](https://go.microsoft.com/fwlink/?linkid=2083908) and make authorized requests to this web API.

## Exposing your API

Select the Expose an API section, and:

1. Select Add a scope
2. accept the proposed Application ID URI (api://{clientId}) by selecting Save and Continue
3. Enter the following parameters
4. for Scope name use access_as_user
5. Keep Admins and users for Who can consent
6. in Admin consent display name type Access TodoListService as a user
7. in Admin consent description type Accesses the TodoListService Web API as a user
8. in User consent display name type Access TodoListService as a user
9. in User consent description type Accesses the TodoListService Web API as a user
10. Keep State as Enabled
11. Select Add scope

## Questions & Issues

Please file any questions or problems with the sample as a GitHub issue.  You can also post on **StackOverflow** with the tag `azure-active-directory`. For OAuth2.0 library issues, please see note below.

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](./CONTRIBUTING.md).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

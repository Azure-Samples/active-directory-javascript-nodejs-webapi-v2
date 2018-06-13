---
services: active-directory
platforms: nodejs
author: navyasric
---

# Node.js Web API with Azure AD v2.0
This sample demonstrates how to protect a Node.js web API with Azure AD v2.0 using the Passport.js library. The code here is pre-configured with a registered client ID. If you register your own app, you will need to replace the client ID.

## Steps to Run

1. Clone the code.

	```git clone https://github.com/Azure-Samples/active-directory-javascript-nodejs-webapi-v2```

2. Make sure you've [installed Node](https://nodejs.org/en/download/).

4. Install the node dependencies: 

	```
	npm install && npm update
	```
5. Run the Web API! By default it will run on `http://localhost:5000`

	```
	node index.js
	```

## Next Steps
The `/hello` endpoint in this sample is protected so an authorized request to it requires an access token issued by Azure AD v2.0 in the header. You can [register your app](https://apps.dev.microsoft.com) and make authorized requests to this web API. Currently, the Azure AD v2.0 does not issue access tokens to a Web API that has a different Application ID than the client app. Make sure you add this Web API under the same Application ID as your app.

## Questions & Issues

Please file any questions or problems with the sample as a GitHub issue.  You can also post on Stackoverflow with the tag `azure-active-directory`. For OAuth2.0 library issues, please see note below. 

# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

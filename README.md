---
page_type: sample
languages:
- javascript
- node.js
products:
- microsoft-identity-platform
- azure-active-directory
description: "A sample demonstrating how to protect a Node.js web API with Azure AD v2.0 using the Passport.js library."
urlFragment: "active-directory-javascript-nodejs-webapi-v2"
---

# Node.js Web API with Azure AD v2.0

This sample demonstrates how to protect a Node.js web API with Azure AD v2.0 using the Passport.js library. The code here is pre-configured with a registered client ID. If you register your own app, you will need to replace the client ID.

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `AppCreationScripts`   | Contains automation scripts for Powershell users (can be safely removed if desired).|
| `process.json`   | Contains configuration parameters for logging via Bunyan.  |
| `index.js`   | Main application logic resides here.                     |
| `config.js`   | Contains configuration parameters for the sample. |
| `.gitignore`      | Defines what to ignore at commit time.      |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CODE_OF_CONDUCT.md` | Code of Conduct information.            |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `LICENSE`         | The license for the sample.                |
| `package.json`    | Package manifest for npm.                   |
| `README.md`       | This README file.                          |
| `SECURITY.md`     | Security disclosures.                      |
| `index.js`     | Implements a simple Node server to api endpoint(s).  |

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

4. Configure your environmental parameters:
   1. Open `config.js`.
   2. Replace the string "Enter_the_Application_Id_Here" with your app/client ID on AAD Portal. `e.g. 21312343-2323121-34342-32311`
   3. Replace the string "Enter_the_Metadata_Endpoint_Here" with your OpenID Connect metadata document url on the AAD Portal. `e.g. https://login.microsoftonline.com/<Tenant ID or Name>`

5. Run the Web API! By default it will run on `http://localhost:5000`

```console
npm start
```

## Next Steps

The `/hello` endpoint in this sample is protected so an authorized request to it requires an access token issued by Azure AD v2.0 in the header. In the rest, we will discuss how to protect and expose this API on Azure AD Portal.

> **Note**: The application that is calling this web API also needs to be registered on Azure AD Portal and configured accordingly. Please refer to the documentation on how to [Configure a client application to access web APIs](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-access-web-apis).

## Exposing your API

Select the Expose an API section, and:

1. [Register your application](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) on Azure AD Portal.
2. Make a note of your `clientID`.
3. On the right side menu, select `Expose an API`.
4. Select `Add a Scope`.
5. Enter your scope information:
   1. Name your scope as `demo.read`.
   2. Under `Who can consent?` section, select `Admins and users`.
   3. Fill `admin consent display name` and `admin consent description` as you like (this will appear on the consent screen to end users informing them what the API does).
   4. Fill `user consent display name` and `user consent description` as you like (this will appear on the consent screen to end users informing them what the API does).
   5. Under `state` section, select `Enabled` (this will add a state parameter to communication between the API and client app and is encouraged for security).
6. Back on `Expose an API` page, click on `Add a client Application`.
   1. Add the `Client ID` of the application that will call **this** web API.
   2. Click on `Authorize scopes` checkbox, then click `Add application` on the bottom.
7. You are all set. After you configure your client application, you will be able to call this web API.

For more detailed instructions discussing the steps above, please refer to the document on how to [Configure an application to expose web APIs](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-expose-web-apis).

## Questions & Issues

Please file any questions or problems with the sample as a GitHub issue.  You can also post on **StackOverflow** with the tag `azure-active-directory`. For OAuth2.0 library issues, please see note below.

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](./CONTRIBUTING.md).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

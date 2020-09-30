const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const auth = require('./auth');

const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const options = {
    identityMetadata: `https://${auth.authority}/${auth.tenantID}/${auth.version}/${auth.discovery}`,
    issuer: `https://${auth.authority}/${auth.tenantID}/${auth.version}`,
    clientID: auth.clientID,
    audience: auth.audience,
    validateIssuer: auth.validateIssuer,
    passReqToCallback: auth.passReqToCallback,
    loggingLevel: auth.loggingLevel,
    scope: auth.scope
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
        // Send user info using the second argument
        done(null, {}, token);
    }
);

const app = express();

app.use(morgan('dev'));

app.use(passport.initialize());

passport.use(bearerStrategy);

// enable CORS (for testing only -remove in production/deployment)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API endpoint exposed
app.get("/hello",
    passport.authenticate('oauth-bearer', {session: false}),
    (req, res) => {
        console.log('Validated claims: ', req.authInfo);

        // Service relies on the name claim.  
        res.status(200).json({
            'displayName': req.authInfo['displayName'],
            'issued-by': req.authInfo['iss'],
            'issued-for': req.authInfo['aud'],
            'scope': req.authInfo['scp']
        });
    }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Listening on port " + port);
});

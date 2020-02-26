const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const config = require('./apiConfig');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;

// Check for clientId placeholder
if (config.clientID === 'YOUR_CLIENT_ID') {
    console.error("Please update 'options' with the client id (application id) of your application");
    return;
}

const bearerStrategy = new BearerStrategy(config, (token, done) => {
        // Send user info using the second argument
        done(null, {}, token);
    }
);

const app = express();

app.use(morgan('dev'));

app.use(passport.initialize());

passport.use(bearerStrategy);

// enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/hello",
    passport.authenticate('oauth-bearer', {session: false}),
    (req, res) => {
        console.log('User info: ', req.user);
        console.log('Validated claims: ', req.authInfo);

        if (claims['scp'].split(" ").indexOf("demo.read") >= 0) {
            // Service relies on the name claim.  
            res.status(200).json({
                'request-for': 'access_token',
                'name': req.authInfo['name'],
                'issued-by': req.authInfo['iss'],
                'issued-for': req.authInfo['aud'],
                'scope': req.authInfo['scp']
            });
        } else {
            console.log("Invalid Scope, 403");
            res.status(403).json({'error': 'insufficient_scope'}); 
        }
    }
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

const resolve = require('path').resolve;

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  fileKey: process.env.FILE_KEY || 'b49e7a8a-3b2a-49ae-9e34-b010a7540e52',
  masterKey: process.env.MASTER_KEY || '',
    publicServerURL: 'http://comerate2016.herokuapp.com/parse',
  // Your apps name. This will appear in the subject and body of the emails that are sent.
  appName: 'Socialive',
   emailAdapter: {
    module: 'parse-server-mailgun',
    options: {
      // The address that your emails come from 
      fromAddress: 'Socialive <socialive@socialiveapp.com>',
      // Your domain from mailgun.com 
      domain: 'socialiveapp.com',
      // Your API key from mailgun.com 
      apiKey: 'key-10e82eb3489a68ed4f84dec523a73fdf',
      // The template section 
      templates: {
        passwordResetEmail: {
          subject: 'Reset your password',
          pathPlainText: __dirname + 'path/to/templates/password_reset_email.txt',
          pathHtml: __dirname +  'path/to/templates/password_reset_email.html',
          callback: (user) => { return { firstName: user.get('firstName') }}
          // Now you can use {{firstName}} in your templates 
        },
          welcomeEmailAlert: {
          subject: 'Welcome to Socialive!',
          pathPlainText: resolve(__dirname, 'welcomeplain.txt'),
          pathHtml: resolve(__dirname, 'welcomepage.html'),
        }
        
    
      }
    }
  },
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts','Reports','Numbers','ChatMessages','User','ChatSessions','Comments','Notifications','Featured'] // List of classes to support for query subscriptions
  },
  push: {
      ios: {
        pfx: 'SocialiveCertificate.p12', // Prod PFX or P12
        bundleId: 'SLA.Socialive',  
        production: true // Prod
      }
      
    }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);

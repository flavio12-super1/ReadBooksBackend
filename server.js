var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('market'); // Create a table for 'market' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);

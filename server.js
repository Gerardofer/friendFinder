const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log("Server listening at port", PORT)
})
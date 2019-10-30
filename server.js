var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlenclosed({
  extended: true
}));
app.use(express.json());


require("./routes/apiRoutes")(app);
require(".routes/htmlRoutes")(app);

app.listen(PORT, function (){
  console.log("App is listening on PORT: " + PORT)
});


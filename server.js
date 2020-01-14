const express = require('express');
// adds a compat layer between express <---> graphql
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Listening');
});

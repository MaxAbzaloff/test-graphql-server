const express = require('express');
const graphqlHttp = require('express-graphql')

const graphQlSettings = require('../graphql')

const router = express.Router();
router.use('/', graphqlHttp(graphQlSettings));

module.exports = router;

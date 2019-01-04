const buildSchema = require('graphql').buildSchema;
const fs = require('fs')
const path = require('path')

let Query = fs.readFileSync(path.resolve(__dirname, ('./query.gql')), {
  encoding: 'utf8'
})

let Mutation = fs.readFileSync(path.resolve(__dirname, ('./mutations.gql')), {
  encoding: 'utf8'
})

const schema = buildSchema(Query + '\n' + Mutation);

module.exports = schema

'use strict';

/**
 * Create Schema
 */
const { mergeSchemas } = require('@graphql-tools/schema');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const schema = mergeSchemas({
  typeDefs,
  resolvers
});

module.exports = schema;

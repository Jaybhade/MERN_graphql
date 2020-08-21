const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true, //schema UI, testing GraphQL queries
}))

app.listen(4000, () => {
	console.log("Port 4000 activated.")
})
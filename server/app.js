const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

// connect to mlab database
// make sure to replace my db string & credentials with your own
mongoose.connect('mongodb+srv://jayesh:jayeshbhade30@gql-jay.101ew.mongodb.net/<gql-jay>?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () => {
	console.log('connected db')
})


const app = express()

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true, //schema UI, testing GraphQL queries
}))

app.listen(4000, () => {
	console.log("Port 4000 activated.")
})
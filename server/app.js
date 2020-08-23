const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//allow cross-origin requests
app.use(cors())

// connect to mlab database
// make sure to replace my db string & credentials with your own
mongoose.connect('mongodb+srv://jayesh:jayeshbhade30@gql-jay.101ew.mongodb.net/<gql-jay>?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () => {
	console.log('connected db')
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true, //schema UI, testing GraphQL queries
}))

app.listen(4000, () => {
	console.log("Port 4000 activated.")
})
const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

//book schema
const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString }
	})
})

//define root queries (entry point)

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } }, //id to find book
			resolve(parent, args){
				//code to get data from db / other sources
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
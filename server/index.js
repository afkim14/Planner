const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/plannerdb");

const Place = mongoose.model('Place', {
  name: String,
  description: String,
  type: String,
  openHours: String
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    places: [Place]
  }
  type Place {
    id: ID!
    name: String!,
    description: String!,
    type: String!,
    openHours: String!
  }
  type Mutation {
    createPlace(name: String!, description: String!, type: String!, openHours: String!): Place
    updatePlace(id: ID!, complete: Boolean!): Boolean
    removePlace(id: ID!): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    places: () => Place.find(),
  },
  Mutation: {
    createPlace: async (_, { name, description, type, openHours }) => {
      const place = new Place({ name, description, type, openHours });
      // save to database
      await place.save();
      return place;
    },
    updatePlace: async (_, { id, complete }) => {
      // default mongoose functions
      await Place.findByIdAndUpdate(id, { complete });
      return true;
    },
    removePlace: async (_, { id }) => {
      await Place.findByIdAndRemove(id);
      return true;
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once("open", function () {
  server.start(() => console.log('Server is running on localhost:4000'));
});

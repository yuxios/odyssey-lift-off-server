const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track (id: ID!): Track
    module (id: ID!): Module!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IcrementTrackViewsResponse!
  }

  type IcrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was sucessful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successfull mutation"
    track: Track
  }

  "A track is a group of Module that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the tracks main author"
    author: Author!
    "the track's main illustrations to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete,in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int 
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Tarck" 
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's lengthn in minutes"
    length: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;

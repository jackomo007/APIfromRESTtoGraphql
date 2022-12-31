const fetch = require("node-fetch");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum CharacterStatus {
    Alive
    Dead
    unknown
  }

  enum CharacterGender {
    Male
    Female
    unknown
  }

  type Character {
    name: String
    id: ID
    status: CharacterStatus
    gender: CharacterGender
    image: String
    episodes: [String]
  }

  type Query {
    characters: [Character]
  }
`;

const resolvers = {
  Query: {
    characters: () => fetchCharacters()
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

function fetchEpisodes() {
  return fetch("https://rickandmortyapi.com/api/episode/")
    .then((res) => res.json())
    .then((json) => json.results);
}

function fetchEpisodeById(id) {
  return fetch("https://rickandmortyapi.com/api/episode/" + id)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchEpisodeByUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchCharacters() {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((json) => json.results);
}

function fetchCharacterById(id) {
  return fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((res) => res.json())
    .then((json) => json);
}

function fetchCharacterByUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
}

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});

const query = gql`
  query {
    authors {
      firstName
      lastName
    }
  }
`;

const body = document.body;
client.query({ query }).then((results) => {
  results.data.authors.forEach( (author) => renderPost(body, author) );
});

const renderPost = (body, author) => {
  const section = document.createElement('section');
  const domString = `
    <p>
      <strong>First Name: </strong>${author.firstName}
    </p>
    <p>
      <strong>Last Name: </strong>${author.lastName}
    </p>
  `;
  section.innerHTML = domString;
  body.appendChild(section);
};

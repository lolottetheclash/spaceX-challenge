import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2 className="title">My first Apollo app 🚀</h2>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

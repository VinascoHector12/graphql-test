import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from 'react-apollo';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
})

const characterStatusIcon = (statusIcon) =>{
  /*if (statusIcon === "Alive"){
    return "status_icon1";
  }else{
    return "status_icon2";
  }*/
  return (statusIcon === "Alive" ? "status_icon1" : "status_icon2");
}

const GET_CHARACTERS = gql`{
  characters{
    results{
      id
      name
      species
      status
      image
      location{
        name
      }
      origin{
        name
      }
    }
  }
}`;


const CharactersQuery = () =>{
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.characters.results.map(character => {
    
    return (
      <div className="cards">
        <img src={character.image} alt=""/>
        <div className="cardInfo">
          <h2 key={character.id}>{character.name}</h2>
          <span className="status">
            <span className={characterStatusIcon(character.status)}></span>
            <p>{character.status} - {character.species}</p>  
          </span>
          <p className="subTitle">Last known location:</p>
          <p>{character.location.name}</p>
          <p className="subTitle">First seen in:</p>
          <p>{character.origin.name}</p>
        </div>                
      </div>)
  });
};


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <>
      <App />
      <div className="contentCard">
        <CharactersQuery />
      </div>
      </>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();

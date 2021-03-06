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
  if (statusIcon === "Alive"){
    return "status_icon1";
  }else if (statusIcon === "Dead"){
    return "status_icon2";
  }else{
    return "status_icon3";
  }
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
      <a key={character.id} href={`https://rickandmortyapi.com/api/character/${character.id}`} className="aCards">
        <div className="cards">
          <img src={character.image} alt=""/>
          <div className="cardInfo">
            <h2>{character.name}</h2>
            <span className="status">
              <span className={characterStatusIcon(character.status)}></span>
              <p>{character.status} - {character.species}</p>  
            </span>
            <p className="subTitle">Last known location:</p>
            <p>{character.location.name}</p>
            <p className="subTitle">First seen in:</p>
            <p>{character.origin.name}</p>
          </div>                
        </div>
      </a>)
  });
};


ReactDOM.render(
  <ApolloProvider client={client}>
      <>
      <App />
      <div className="contentCard">
        <CharactersQuery />
      </div>
      </>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();

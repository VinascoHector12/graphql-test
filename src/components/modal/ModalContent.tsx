import React from 'react';
import styled from 'styled-components';
import './ModalContent.css';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from 'react-apollo';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql'
});

const GET_CHARACTERS = gql`{
    characters{
        results{
            id
            name
            image
        }
    }
}`;

const Wrapper = styled.div`
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    //flex-direction: column;
    color: #fff;
    flex-wrap: wrap;
    width: 600px;
    justify-content: space-around;

    img{
        height: 20px;
        width: 20px;
    }
`;

type Props = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CharacterList = () =>{

    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.characters.results.map(character => {
    
    return (
        <div key={character.id} className="listCont">
            <a href="/">
                <img src={character.image} alt=""/>
                <p> {character.name}</p>
            </a>
        </div>
        )
    })
};


const ModalComponent: React.FC<Props> = ({setModalOpen}:Props) => ( //En serio por el :Props?
    <ApolloProvider client={client}>
        <div className="fullModal">
            <h2 className="title">Lista de personajes</h2>
            <input type="text" placeholder="Buscar: "/>            
            <Wrapper>
                <CharacterList />
            </Wrapper>

            <div className="btnPages">
                <button>Back</button>
                <button>Next</button>
            </div>

            <button type="button" onClick={() => setModalOpen(false)}>
                <span>Close</span>
            </button>
        </div>
    </ApolloProvider>
);

export default ModalComponent;




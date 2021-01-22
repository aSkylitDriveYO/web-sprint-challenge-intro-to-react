// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props) {

    const { character } = props;

    //console.log(character,'data');
    //console.log(character.results, 'h1')

    return (
        <CharacterContainer key="" className='CharDiv'>
            <H2char>{character.name}</H2char>
            <H3Status known={character.status==='Alive'}>{character.status}</H3Status>
            <StyledImg src={character.image} alt='' />
        </CharacterContainer>
    )
}

const CharacterContainer = styled.div`
    margin: 5%;
`
const StyledImg = styled.img`
    border-radius: 15px;
    border: 5px solid grey;
`
const H2char = styled.h2`
    font-family: 'Courier New';
`

const H3Status = styled.h3`
    color: ${(pr) => pr.known ? 'green' : 'orange'};
`




import React from 'react'
import Character from './Character'
import styled from 'styled-components'

export default function List(props) {

    const { characters } = props;

    return (
        <ListDiv key='' className='ListDiv'>
            {characters.map(character => {
                return <Character key={character.id} character={character} />
            })}
        </ListDiv>
    )
}


const ListDiv = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
`

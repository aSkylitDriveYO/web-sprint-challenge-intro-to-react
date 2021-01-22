
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import List from './components/List'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.\
  const [characters,setCharacters] = useState([])

  useEffect(() => {

  
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <StyledApp key='' className="App">
      <Header className="Header">Characters</Header>
      <List characters = {characters}/>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  max-width: 100%;
`
const Header = styled.h1`
  font-size:4em;
  font-family: 'Courier New', cursive;
`
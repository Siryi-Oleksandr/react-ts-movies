import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Container} from './App.styled'
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';

function App() {
  return (
    <Container>
     
      <h1>hello bro</h1>
      <Routes>
        <Route  path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
}

export default App;

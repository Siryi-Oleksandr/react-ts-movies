import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Container} from './App.styled'
import Navigation from 'components/Navigation/Navigation';

const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('components/Movies/Movies'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route  index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
    </Container>
  );
}

export default App;

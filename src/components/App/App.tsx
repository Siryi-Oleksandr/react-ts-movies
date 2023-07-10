import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {Container} from './App.styled'
import Navigation from 'components/Navigation/Navigation';
import { GlobalStyle } from 'GlobalStyle';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route  index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 2500 }} />
    </Container>
  );
}

export default App;

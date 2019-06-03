import React from 'react';
import publications from './Reader/publications.json';
import Reader from './Reader/Reader';
import MoviesPage from './MoviesPage/MoviesPage';

const App = () => (
  <>
    <Reader items={publications} /> <MoviesPage />
  </>
);
export default App;

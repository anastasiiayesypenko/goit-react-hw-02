import React from 'react';
import publications from './Reader/publications.json';
import Reader from './Reader/Reader';
import MoviesPage from './MoviesPage/MoviesPage';
import Dashboard from './Dashboard/Dashboard';

const App = () => (
  <>
    <Reader items={publications} /> <MoviesPage /> <Dashboard />
  </>
);
export default App;

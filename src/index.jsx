import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/error-component/ErrorBoundary';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
  
  <Header/>
  <ErrorBoundary>
    <MovieList/>
    </ErrorBoundary>
    <Footer/>
  
  </React.StrictMode>,
  document.getElementById('root'),
);

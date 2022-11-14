import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/error-component/ErrorBoundary';
import './index.css';
import { ModalProvider } from 'react-modal-hook';
import { MovieProvider } from './shared/MovieProvider';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <ModalProvider>
        <Header />
        <ErrorBoundary>
          <MovieList />
        </ErrorBoundary>
        <Footer />
      </ModalProvider>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

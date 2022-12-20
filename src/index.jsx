import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/Footer';
import MovieList from './components/movie-list/MovieList';
import ErrorBoundary from './components/error-component/ErrorBoundary';
import './index.css';
import { ModalProvider } from 'react-modal-hook';
import { MovieProvider } from './shared/MovieProvider';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieProvider>
        <ModalProvider>
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
          <Footer />
        </ModalProvider>
      </MovieProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

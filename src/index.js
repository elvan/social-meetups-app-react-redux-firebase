import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ScrollToTop } from './components/router/ScrollToTop';
import { fetchMeetups } from './features/meetups/store/meetupActions';
import './index.css';
import { configureStore } from './store/configureStore';

const store = configureStore();

store.dispatch(fetchMeetups());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

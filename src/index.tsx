import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Howto from './pages/Howto/index';
import Todo from './pages/Todo/index';
import Sample from './pages/Howto/sample/index';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Conponents from './pages/components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="howto" element={<Howto />} />
          <Route path="howto/sample" element={<Sample />} />
          <Route path="todo" element={<Todo />} />
          <Route path="*" element={
              <main>
                <h1>404</h1>
              </main>
          } />
          <Route path='conponents' element={<Conponents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.css';
import 'reset-css'
import Header from './components/Header/Header';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      App
      { routes }
    </div>
  );
}

export default App;

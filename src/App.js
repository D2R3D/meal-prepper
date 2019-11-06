import React from 'react';
import 'reset-css'
import Nav from './Components/Nav/Nav'
import routes from './routes'
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;

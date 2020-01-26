import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Divider from '@material-ui/core/Divider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Divider/>
      <Content/>
    </div>
  );
}

export default App;

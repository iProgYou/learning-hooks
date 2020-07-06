import React from 'react';
import './App.css';
import Clock from './components/clock'
import Tabs from './components/tabs';
import Weather from './components/weather';

function App() {
  let tabs = [
    {title:'tab 1',content: 'Hello this is my tab and its a good ol tab'},
    {title:'tab 2',content: 'Whats going on here'},
    {title:'tab 3',content: 'blugh'}
  ]
  return (
    <div className="App">
      <Clock />
      <Tabs tabs={tabs}/>
      <Weather />
    </div>
  );
}

export default App;

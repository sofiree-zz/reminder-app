import React, {Component} from 'react';
import RemindersList from './components/RemindersList'
// import logo from './logo.svg';
// import './App.css';




class App extends React.Component{
  render(){
    return(
      <div className="app">
        <RemindersList/>
      </div>
    );
  }
}

export default App;

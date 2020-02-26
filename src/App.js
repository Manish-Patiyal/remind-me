import React, { Component } from 'react';
import './App.css';
import Reminders from './Components/Reminders';
import AddReminder from './Components/AddReminder';

class App extends Component {

  state = {
    addReminder: '',
    reminders: []
  }

  addReminder = (event) => {
    this.setState({
      addReminder: event.target.value
    })
  }


  deleteReminder = (index) => {
    let tempReminders = this.state.reminders
    tempReminders.splice(index,1)
    this.setState({
      reminders: tempReminders
    })
  }


  saveReminder = () => {
    let tempReminders = this.state.reminders
    tempReminders.push(this.state.addReminder)
    this.setState({
      reminders: tempReminders
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>List of Reminders</h2>
          <AddReminder onReminderAdded={this.addReminder} onAddReminderClicked={this.saveReminder} />
        </div>
        <div className="App-intro">
          <Reminders elements={this.state.reminders} listClick={index => this.deleteReminder(index)} />
        </div>
      </div>
    );
  }
}

export default App;

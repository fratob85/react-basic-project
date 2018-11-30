import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asdf1', name: 'Francesco', age: 33},
      {id: 'asdf2', name: 'Gabriele', age: 33},
      {id: 'asdf3', name: 'Chiara', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 33},
        {name: 'Gabriele', age: 33},
        {name: 'Chiara', age: 27}
      ]});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonsHandler = (personIndex, id) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {

    const style = {
      backgroundColor: '#82bbbf',
      font: 'inherit',
      color: '#fff',
      border: '1px solid #0d7aa0',
      padding: '8px 30px',
      boxShadow: '0 1px 4px #007da0',
      borderRadius: '5px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonsHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is a list of persons</p>
        <button 
          className="button"
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

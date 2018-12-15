import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
      super(props);
      console.log('[Persons.js] Inside constructor', props);
      this.state = {
        persons: [
          {id: 'asdf1', name: 'Francesco', age: 33},
          {id: 'asdf2', name: 'Gabriele', age: 33},
          {id: 'asdf3', name: 'Chiara', age: 27}
        ],
        otherState: 'some other value',
        showPersons: false
      }
    }
  
    componentWillMount() {
      console.log('[Persons.js] Inside componentWillMount()');
    }
  
    componentDidMount() {
      console.log('[Persons.js] Inside componentDidMount()');
    }
    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
              click={() => this.props.clicked(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} />
          });
    }
}

export default Persons
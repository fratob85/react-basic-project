import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
      super(props);
      console.log('[Person.js] Inside constructor', props);
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
      console.log('[Person.js] Inside componentWillMount()');
    }
  
    componentDidMount() {
      console.log('[Person.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Person.js] Inside componentWillReceiveProps()', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Person.js] Inside componentWillUpdate()', nextProps, nextState);
    }
    
    componentDidUpdate() {
        console.log('[Person.js] Inside componentDidUpdate()');
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;
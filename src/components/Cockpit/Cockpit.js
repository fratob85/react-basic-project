import React from 'react';
import classes from './Cockpit.scss';

const cockpit = (props) => {
    const assignedClasses = [];
    const btnClass = [];
    btnClass.push(classes.button);
    if (props.showPersons) {
        btnClass.push(classes.buttonActive);
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App!</h1>
            <p className={assignedClasses.join(' ')}>This is a list of persons</p>
            <button 
            className={btnClass.join(' ')}
            onClick={props.clicked}>Toggle Persons</button>
        </div>);  
}

export default cockpit;
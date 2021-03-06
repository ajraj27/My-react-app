import React,{Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
  render(){
    return this.props.persons.map( ( person, index ) =>
      <Person
      clicked={() => this.props.clicked( index )}
      name={person.name}
      age={person.age}
      key={person.id}
      position={index}
      changed={( event ) => this.props.changed( event, person.id )} />
    )
  }
}

export default Persons;

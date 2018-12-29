import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component{

  componentDidMount(){
    if(this.props.position===0){
      this.inputElement.focus();
    }
  }

  render(){
    return (
        <div className={classes.Person}>
            <p onClick={this.props.clicked}>Im {this.props.name} and I am {this.props.age} years old!</p>
            <input ref={(inp) => this.inputElement=inp}
            type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    )
  }
}

Person.propTypes={
  clicked:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
}


export default Person;

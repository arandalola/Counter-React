import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
    static defaultProps={
        name:"Pepito"
    }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
export default Greeting;
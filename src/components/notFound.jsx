import React, { Component } from 'react';

class NotFound extends Component {
  state = {  }
  render() { 
    return ( 
      <img src={process.env.PUBLIC_URL + '/notfound.png'} /> 
     );
  }
}
 
export default NotFound;
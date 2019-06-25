import React, { Component } from 'react';


class MovieForm extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Movie id:{this.props.match.params.id}</h1>
        <button className="btn btn-primary" onClick={()=>this.props.history.push('/movies')}>Button</button>
     </div>
     );
  }
}
 
export default MovieForm;
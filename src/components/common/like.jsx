import React, { Component } from 'react';
class Like extends Component {
  state = {}
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o"

    return (<div>

      <i onClick={this.props.onClick} style={{ cursor: "pointer" }} className={classes} aria-hidden="true"></i>

    </div>)
  }
}

export default Like;
import React, { Component } from "react";

class Reminder extends Component {

    render() {
        return (<div ><p onClick={this.props.clicked}>{this.props.name}</p></div>)
    }
}
export default Reminder;
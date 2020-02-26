import React, { Component } from "react";

class AddReminder extends Component {

    render() {
        return (
            <div>
                <input name='add-rem' onChange={this.props.onReminderAdded}></input>
                <button onClick={this.props.onAddReminderClicked}>Add Reminder</button>
            </div>
        )
    }
}
export default AddReminder;
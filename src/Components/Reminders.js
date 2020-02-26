import React, { Component } from "react";
import './../App.css';
import Reminder from "./Reminder";
class Reminders extends Component {
    render() {
        let showReminders = null
        if (this.props.elements) {
            showReminders = (<div>
                {
                    this.props.elements.map((re, index) => {
                        return <Reminder name={re} clicked={() => this.props.listClick(index)} />
                    })
                }
            </div>);

        }

        return showReminders;
    }

}
export default Reminders;
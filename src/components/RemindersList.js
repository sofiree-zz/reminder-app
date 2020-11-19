import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Moment from 'react-moment';

class remindersList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			remind: {
				text: "",
				dueDate: new Date()
			},
			reminders: []
		};
	}
	// constructor ends

	//	 onclick
	addReminder = () => {
		const { remind } = this.state;
		localStorage.setItem({ remind }, JSON.stringify(this.state));
	}

	//   lifecycle
	componentDidMount() {
		let storageData = JSON.parse(localStorage.getItem("reminders"));
		this.setState({ reminders: storageData });

		// this.state = JSON.parse(localStorage.getItem('remind:{text: "", dueDate: new Date}'));

		// if (storageData) {
		// 	this.setState({
		// 		remind: this.state.remind
		// 		// text: this.state.text,
		// 		// dueDate: this.state.dueDate
		// 	})
		// } else {
		// 	this.setState({
		// 		remind: {
		// 			text: "",
		// 			dueDate: ""
		// 		}
		// 	})
		// }

	}


	render() {
		const { reminders } = this.state;
		return (
			<div className="container-main">
				<h1>personal Reminder List</h1>
				<div className="reminder-content">
					<input
						type="text"
						className="form-control"
						placeholder="add reminder now...."
						onChange={event => this.setState({ text: event.target.value })}
					/>

					{/* <DatePicker
						selected={this.state.dueDate}
						onChange={event => this.setState({ dueDate: new Date() })}
						showTimeSelect
						name="dueDate"
						timeIntervals={20}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm aa"
						className="form-control"
					/> */}

					<button type="button" onClick={() => this.addReminder()} >
						ADD
					</button>
				</div>

				<ul className="list-holder">

					{
						reminders.map(reminder => {
							return (
								<li key={reminder.id} className="list-of-reminders">
									<div className="list-item">
										<div>{reminder.text}</div>
										{/* <div><em>{Moment(new Date(reminders.dueDate)).fromNow()}</em></div> */}
										<div><em>{new Date().now()}</em></div>
									</div>
								</li>
							)
						})
					}

				</ul>

			</div>
		);
	}
}

export default remindersList;
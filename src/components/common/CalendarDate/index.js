import React from 'react'
import CalendarBody from './CalendarBody'
import './calendar.css'

export default class index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<CalendarBody {...this.props} />
		);
	}
}
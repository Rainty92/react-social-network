import React, { Component } from 'react'


class Navbar extends React.Component {
	constructor () {
		super()

	}

	render() {
		return (
			<nav className='nav'>
			<ul>
				<li>Profile</li>
				<li>Messages</li>
				<li>News</li>
				<li>Music</li>
				<li>Settings</li>
			</ul>
		</nav>
		)	
	}
}

export default Navbar
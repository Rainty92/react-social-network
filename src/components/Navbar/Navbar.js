import React, { Component } from 'react'
import Styles from './Navbar.module.css'

class Navbar extends React.Component {
	constructor () {
		super()

	}

	render() {
		return (
			<nav className={Styles.nav}>
			<ul>
				<li><a href='/profile'>Profile</a></li>
				<li><a href='/dialogs'>Messages</a></li>
				<li><a href='/news'>News</a></li>
				<li><a href='/music'>Music</a></li>
				<li><a href='/settings'>Settings</a></li>
			</ul>
		</nav>
		)	
	}
}

export default Navbar
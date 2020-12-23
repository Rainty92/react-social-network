import React, { Component } from 'react'
import Styles from './Header.module.css'

class Header extends React.Component {
	constructor () {
		super()

	}

	render() {
		return (
		<header className={Styles.header}>
			<img src='https://www.clipartmax.com/png/full/105-1055632_google-chrome-logo-png-portrait-of-a-man.png' />
			Header
		</header>
		)	
	}
}

export default Header
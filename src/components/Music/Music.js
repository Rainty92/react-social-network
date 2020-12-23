import React from 'react'
import Style from './Music.module.css'

class Music extends React.Component {
	constructor () {
		super ()
	}

	render () {
		return (
		<div className={Style.Music}>Music</div>
		)
	}
}

export default Music
import React, { Component } from 'react'
import Style from './News.module.css'

class News extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div className={Style.news}>
				News
			</div>
		)
	}
}

export default News
import React, { Component } from 'react'
import styles from './Post.module.css'


class Post extends React.Component {
	constructor (props) {
		super()
	}

	render() {
		return (
			<div>
				<div>
					{this.props.message}
				</div>
			</div>
		)	
	}
}

export default Post 
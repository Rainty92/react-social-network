import React, { Component } from 'react'
import Styles from './MyPosts.module.css'
import Post from './Post/Post'


class MyPosts extends React.Component {
	constructor (props) {
		super()

	}

	render() {
		return (
			<div>
				<div>
					ava + description
				</div>
				<div>
					My posts
					<Post message='test 1'/>
					<Post message='test 2'/>
				</div>
			</div>
		)	
	}
}

export default MyPosts
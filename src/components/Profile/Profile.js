import React, { Component } from 'react'
import Styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


class Profile extends React.Component {
	constructor () {
		super()

	}

	render() {
		return (
		<div>
			<div>
				<img src='https://wallpapercave.com/wp/wp8013375.jpg'/>
			</div>
			<MyPosts />
		</div>
		)	
	}
}

export default Profile
import React, { Component } from 'react'


class Profile extends React.Component {
	constructor () {
		super()

	}

	render() {
		return (
		<div className='content'>
			<div>
				<img src='https://wallpapercave.com/wp/wp8013375.jpg'/>
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					Post 1
				</div>
				<div>
					Post 2
				</div>
				<div>
					Post 3
				</div>
			</div>
		</div>
		)	
	}
}

export default Profile
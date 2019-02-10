import React from 'react'
import styles from './Project.module.css'

const project = props => {

	let classes = [styles.Project, 'card']

	return (
		<div className='col-3'>
			<div className={classes.join(' ')}>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Time slack: {props.timeslack}</p>
					<p className="card-text">Employee: {props.employee}</p>
					<button className="btn btn-sm btn-info mr-3">Edit</button>
					<button className="btn btn-sm btn-danger">Remove</button>
				</div>
			</div>
		</div>
	)
}

export default project
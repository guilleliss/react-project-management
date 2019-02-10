import React from 'react'
import styles from './Employee.module.css'

const employee = props => {

	const classes = [styles.Employee, 'card']

	return (
		<div className="col-3">
			<div className={classes.join(' ')}>
				<div className="card-body">
					<h5 className="card-title">{props.firstName} {props.lastName}</h5>
					<p className="card-text">Supervisor: {props.supervisor}</p>
					<button className="btn btn-sm btn-info mr-3">Edit</button>
					<button className="btn btn-sm btn-danger" 
						onClick={e => props.removeClicked(e, props.id)}>Remove</button>
				</div>
			</div>
		</div>
	)
}

export default employee
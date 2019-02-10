import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Task from '../components/Task/Task'

class ListTasks extends Component {

	render() {
		let tasks = (
			<div className="col-12">
				<p>No tasks have been created yet.</p>
				<p>Click below to start adding new tasks.</p>
			</div>) 

		if(this.props.tasks && this.props.tasks.length !== 0) {
			tasks = this.props.tasks.map(t => (
				<Task task={t}
				 key={t.id} 
				 id={t.id} 
				 removeClicked={this.props.removeClicked} />
			))
		}

		return (
			<>	
				<h1>Tasks</h1>
				<div className="row py-5">
					{tasks}
				</div>
				<Link className="btn btn-primary" to="/tasks/add">Add New Taks</Link>
			</>
		)
	}
}

export default ListTasks
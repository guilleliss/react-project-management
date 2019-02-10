import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project/Project'

class ListProjects extends Component {

	render() {
		let projects = (
			<div className="col-12">
				<p>No projects have been created yet.</p>
				<p>Click below to start adding new projects, or <Link to='/employees/add'>here</Link> to start adding new employees.</p>
			</div>
		)

		if(this.props.projects && this.props.projects.length !== 0) {
			projects = this.props.projects.map(project => (
				<Project name={project.name} 
				timeslack={project.timeslack} 
				employee={project.employee} 
				key={project.id} />
			))
		}

		return (
			<>	
				<h1>Projects</h1>
				<div className="row py-5">
					{projects}
				</div>
				<Link className="btn btn-primary" to="/projects/add">Add New Project</Link>
			</>
		)
	}
}

export default ListProjects
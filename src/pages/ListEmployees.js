import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Employee from '../components/Employee/Employee'

class ListEmployees extends Component {

	render() {
		let employees = (
			<div className="col-12">
				<p>No employees have been created yet.</p>
				<p>Click below to start adding new employees.</p>
			</div>) 

		if(this.props.employees && this.props.employees.length !== 0) {
			employees = this.props.employees.map(e => (
				<Employee firstName={e.firstName}
				 lastName={e.lastName} 
				 key={e.id} 
				 id={e.id} 
				 supervisor={e.supervisor} 
				 removeClicked={this.props.removeClicked} />
			))
		}

		return (
			<>	
				<h1>Employees</h1>
				<div className="row py-5">
					{employees}
				</div>
				<Link className="btn btn-primary" to="/employees/add">Add New Employee</Link>
			</>
		)
	}
}

export default ListEmployees
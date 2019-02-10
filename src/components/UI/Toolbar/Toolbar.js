import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = props => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/">Home</Link>		
		<div className="collapse navbar-collapse" id="toolbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/employees">Employees</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/projects">Projects</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/tasks">Tasks</Link>
				</li>
			</ul>
		</div>
	</nav>
)

export default Toolbar
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Toolbar from './components/UI/Toolbar/Toolbar'
import ListProjectsPage from './pages/ListProjects'
import ListEmployeesPage from './pages/ListEmployees'
import ListTasksPage from './pages/ListTasks'
import AddProjectPage from './pages/AddProject'
import AddEmployeePage from './pages/AddEmployee'
import AddTaskPage from './pages/AddTask'

import './App.css';

class App extends Component {

	state = {
		projects: [],
		idProjects: 0,
		employees: [],
		idEmployees: 0,
		tasks: [],
		idTasks: 0
	}

	handleNewProjectForm = (e, data) => {
		e.preventDefault()

		let project = { ...data }
		project['id'] = this.state.idProjects
		let projects = this.state.projects.map(p => p)
		projects.push(project)
		
		this.setState({ 
			projects: projects, 
			idProjects: this.state.idProjects + 1 
		})
	}

	handleNewEmployeeForm = (e, data) => {
		e.preventDefault()

		let employee = { ...data }
		employee['id'] = this.state.idEmployees
		let employees = this.state.employees.map(e => e)
		employees.push(employee)
		
		this.setState({ 
			employees: employees, 
			idEmployees: this.state.idEmployees + 1
		})
	}

	handleNewTaskForm = (event, data) => {
		event.preventDefault()

		let newTask = { ...data }
		let newId = this.state.idTasks
		let tasks = []

		if(newTask['id']) {
			tasks = this.state.tasks.map(task => {
				return newTask.id === task['id'] ? newTask : task
			})
		} else {
			tasks = this.state.tasks.map(task => task)
			newTask['id'] = newId
			tasks.push(newTask)
			newId++
		}

		this.setState({ 
			tasks: tasks, 
			idTasks: newId
		})
	}	

	handleRemoveEmployee = (e, id) => {
		let employees = this.state.employees.filter(e => id !== e.id)
		this.setState({ employees: employees });
	}

	handleRemoveTask = (e, id) => {
		let tasks = this.state.tasks.filter(t => id !== t.id)
		let projects = this.state.projects.map(p => p)

		projects = projects.map(p => {
			p.tasks = p.tasks.filter(t => t !== id)
			return p
		})

		this.setState({ 
			tasks: tasks,
			projects: projects
		})
	}	

	render() {
		return (
			<BrowserRouter>
				<div>
					<Toolbar />
					<div className="container py-5">
						<div className="row">
							<div className="col-12">
								<Route exact path="/projects"
									component={() => <ListProjectsPage projects={this.state.projects} />} />
								<Route exact path="/employees"
									component={() => <ListEmployeesPage 
														employees={this.state.employees} 
														removeClicked={this.handleRemoveEmployee} />} />
								<Route exact path="/tasks"
									component={() => <ListTasksPage 
														tasks={this.state.tasks}
														removeClicked={this.handleRemoveTask} />} />														
								<Route path="/projects/add"
									component={() => <AddProjectPage 
										handleForm={this.handleNewProjectForm}
										employees={this.state.employees}
										tasks={this.state.tasks} />} />
								<Route path="/employees/add"
									component={() => <AddEmployeePage 
										handleForm={this.handleNewEmployeeForm}
										employees={this.state.employees} />} />
								<Route path="/tasks/add/:id?"
									component={(props) => <AddTaskPage 
										handleForm={this.handleNewTaskForm}
										tasks={this.state.tasks}
										{...props} />} />										
							</div>
						</div>
					</div>			
				</div>
			</BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react'
import styled from 'styled-components'
import classes from './App.css'
// import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

// const StyledButton = styled.button`
// 	background-color: ${(props) => (props.alt ? 'red' : 'green')};
// 	color: white;
// 	font: inherit;
// 	border: 1px solid blue;
// 	padding: 8px;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
// 		color: black;
// 	}
// `

class App extends Component {
	state = {
		persons: [
			{ id: '1233', name: 'Max', age: 28 },
			{ id: '1234', name: 'Manu', age: 29 },
			{ id: '1235', name: 'Stephanie', age: 26 },
		],
		otherState: 'some other value',
		showPersons: false,
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.person.findIndex((p) => {
			return p.id === id
		})

		const person = { ...this.state.persons[personIndex] }

		// const person = Object.assign({}, this.state.persons[personIndex])

		person.name = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({
			persons: persons,
		})
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({ persons: persons })
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({ showPersons: !doesShow })
	}

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		}

		let persons = null

		// let btnClass = [classes.Button]

		let btnClass = ''

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangeHandler(event, person.id)}
							/>
						)
					})}
				</div>
			)

			style.backgroundColor = 'red'

			// style.backgroundColor = 'red'
			// style[':hover'] = {
			// 	backgroundColor: 'salmon',
			// 	color: 'black',
			// }

			// btnClass.push(classes.Red)
			btnClass = classes.Red
		}

		// let classes = ['red', 'bold'].join(' ')
		// "red bold"

		const assignClasses = []
		if (this.state.persons.length <= 2) {
			assignClasses.push(classes.red) // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			assignClasses.push(classes.bold) // classes = ['red', 'bold']
		}

		return (
			// <StyleRoot>
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignClasses.join(' ')}>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{/* <StyledButton
					alt={this.state.showPersons}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</StyledButton> */}
				{/* <button className={classes.Button} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button> */}
				{/* <button
					className={btnClass.join(' ')}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</button> */}
				{/* <button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button> */}
				{persons}
			</div>
			// </StyleRoot>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

// export default Radium(App)
export default App

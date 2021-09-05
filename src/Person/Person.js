import React from 'react'

import './Person.css'

// function person() {
// 	return <h2>Hola</h2>
// }

// var person = function () {}

const person = (props) => {
	const style = {
		'@media (minWidth: 500px)': {
			width: '450px',
		},
	}
	return (
		<div className='Person' style={style}>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	)
}

export default person

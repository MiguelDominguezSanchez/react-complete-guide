import React from 'react'

// function person() {
// 	return <h2>Hola</h2>
// }

// var person = function () {}

const person = (props) => {
	return (
		<p>
			I'm {props.name} and I am {props.age} years old!
		</p>
	)
}

export default person

import React from 'react'

// function person() {
// 	return <h2>Hola</h2>
// }

// var person = function () {}

const person = () => {
	return (
		<p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
	)
}

export default person

import React from 'react'

// function person() {
// 	return <h2>Hola</h2>
// }

// var person = function () {}

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</div>
	)
}

export default person

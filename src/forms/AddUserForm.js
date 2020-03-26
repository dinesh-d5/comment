import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', comment: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<div className="form-style-6">
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.comment) return

				props.addUser(user)
				setUser(initialFormState)}}>
			
			<input className="form-style-6" type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Username or Email"/><br/>
			
			<textarea className="form-style-6" type="text" name="comment" value={user.comment} onChange={handleInputChange} placeholder="Comment you Thoughts" /><br/>
			<button className="form-style-6">Add a comment</button> 
		</form></div>
	)
}

export default AddUserForm

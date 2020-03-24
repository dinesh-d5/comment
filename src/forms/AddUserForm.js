import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', comment: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.comment) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Comment</label>
			<textarea type="text" name="comment" value={user.comment} onChange={handleInputChange} />
			<button>Add new comment</button>
		</form>
	)
}

export default AddUserForm

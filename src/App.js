import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	
	const usersData = [
		{ id: 1, name: 'John', comment: 'Good' },
		{ id: 2, name: 'Bruce', comment: 'Bad' },
		
	]

	const initialFormState = { id: null, name: '', comment: '' }


	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	} 

	

	return (
		<div className="container">
			<h1>Comment Form</h1>
				<div >
				<Fragment>
						<AddUserForm addUser={addUser} />
						</Fragment>
				 <UserTable users={users} deleteUser={deleteUser} /> 
				</div>
			</div>
		
	)
}

export default App

import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import EditUser from './Edituser'



const App = () => {
	
	const usersData = [
		{ id: 1, name: 'John', comment: 'Good' },
		{ id: 2, name: 'Bruce', comment: 'Bad' },
		
	]

	const initialFormState = { id: null, name: '', comment: '' }


	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
   const[editit,setEdit] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	} 

	const editr=user=>{
		setEdit(true)
setCurrentUser({id:user.id,name:user.name,comment:user.comment})
	}

	const updateUser = (id, updatedUser) => {
		setEdit(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}


return (
		<div>
			<h1 className="form-style-6h1">Comment Form</h1>
				<div > {editit ? (
					<Fragment>
						<EditUser 
						editit={editit}
						setEdit={setEdit}
						currentUser={currentUser}
						updateUser={updateUser}
						/>
					</Fragment>
					): (
				<Fragment>
						<AddUserForm addUser={addUser} />
						</Fragment>)}
				 <UserTable users={users} editr={editr} deleteUser={deleteUser} /> 
				</div>
			</div>
		
	)
}

export default App

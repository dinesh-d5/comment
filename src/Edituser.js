import React, { useState, useEffect } from 'react'

const EditUser = props => {
	const [ user, setUser ] = useState(props.currentUser)
  
	useEffect(() => {
		setUser(props.currentUser)
	  },
	  [ props ]
	)

   const handleInputChange = event => {
	  const { name, value } = event.target
  
	  setUser({ ...user, [name]: value })
    }
    
    return (
        <div className="form-style-6">
        <form onSubmit={event => {
            event.preventDefault()
            props.updateUser(user.id, user)
          }}
        >
         
          <input className="form-style-6" type="text" name="name" value={user.name} onChange={handleInputChange} />
        
          <input className="form-style-6" type="text" name="comment" value={user.comment} onChange={handleInputChange} />
          <button className="form-style-6">Add a comment</button> 
         
        </form></div>
      )


} 
export default EditUser;
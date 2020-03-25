import React from 'react'

const UserTable = props => (
  <table >
    <thead>
      <tr>
        <th>Name</th>
        <th>comment</th>
       </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.comment}</td>
            <td>
              <button className="btn1"
                onClick={() => props.deleteUser(user.id)}>
                Edit
              </button>            
              <button className="btn"
                onClick={() => props.deleteUser(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Comments</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable

import React, { Component } from 'react'

 class UserList extends Component {
  render() {
    return (
      <div>
        <table>
            <thead>
            <tr>
                <td>id</td>
                <td>name</td>
            </tr>
            </thead>
            <tbody>
                
            {this.props.data.map(user =>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
                    ))}
              
            </tbody>
        </table>
      </div>
    )
  }
 }

export default UserList

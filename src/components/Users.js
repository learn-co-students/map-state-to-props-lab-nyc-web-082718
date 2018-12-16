import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, i) => (
            <li key={i}>
              {user.username}
            </li>
          ))}
        </ul>
        Number of users: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  }
}

export default connect(mapStateToProps)(Users)

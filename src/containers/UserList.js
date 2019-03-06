import React, { Component } from "react";

import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { selectUser } from "../actions/index";

class UserList extends Component {
  render() {
    return (
      <div>
        <ListGroup as="ul">
          {this.props.users.map(user => {
            return <ListGroup.Item key={user.id} onClick={()=>this.props.selectUser(user)}>{user.name}</ListGroup.Item>;
          })}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { selectUser }
)(UserList);

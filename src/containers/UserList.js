import React, { Component } from 'react';

import {connect} from 'react-redux';

class UserList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map(user=>{
                        return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    users:state.users
})

export default connect(mapStateToProps)(UserList);
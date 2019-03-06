import React, {Component} from 'react';
import {connect} from 'react-redux'

class UserDetail extends Component {



    render(){
        
        const {activeUser} = this.props
        if(!activeUser){
            return <div>Sélectionnez un utilisateur</div>
        }
            return(
            
                <ul>
                    <li>Id: {activeUser.id}</li>
                    <li>Nom: {activeUser.name}</li>
                    <li>Rôle: {activeUser.role}</li>
                   
                </ul>) 
        
    }
}

const mapStateToProps = state => ({
    activeUser:state.activeUser
})


export default connect(mapStateToProps)(UserDetail);
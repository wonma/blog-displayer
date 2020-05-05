import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserName extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    
    render() {
        const { user } = this.props;
        if (!user) { 
            return null; 
        }

        return (
            <div>
                <h3>{this.props.user.name}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find((user) => {
        return user.id === ownProps.userId});
    return { user };
}

export default connect(mapStateToProps, { fetchUser })(UserName);
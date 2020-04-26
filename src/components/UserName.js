import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserName extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    
    render() {

        return (
            <div>
                <h3>{this.props.user}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.user);

    return { user: state.user };
}

export default connect(mapStateToProps, { fetchUser })(UserName);
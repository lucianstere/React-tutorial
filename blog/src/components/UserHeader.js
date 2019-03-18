/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line react/prefer-stateless-function
class UserHeader extends React.Component {

    render() {
        // eslint-disable-next-line react/prop-types
        const { user } = this.props;
        
        if(!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps ) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) };
}

export default connect(mapStateToProps)(UserHeader);
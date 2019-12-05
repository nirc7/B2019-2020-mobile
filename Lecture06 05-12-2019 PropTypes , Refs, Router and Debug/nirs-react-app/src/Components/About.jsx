import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                ABOUT
                userId={this.props.location.state.userObj.userId}
                userName={this.props.location.state.userObj.userName}
            </div>
        );
    }
}

export default  withRouter(About);
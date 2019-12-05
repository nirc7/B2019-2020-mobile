import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('ctor');

        this.state = {
            students: []
        };

    }

    btnGoToAboutWith88 = () => {
        let userObj = {
            userId: 88,
            userName: 'avi'
        };

        this.props.history.push({
            pathname: '/about',
            search: '?query=abc',
            state: { userObj: userObj }
        });
    }

    componentDidMount() {
        console.log('in CDM');
        //from server
        this.setState({ students: ['avi', 'benny'] });
    }

    render() {
        console.log('in render');

        let studewntsStr = this.state.students.map(st => { return <li>{st + '\n'}</li> });

        return (
            <div>
                HOME
                <button onClick={this.btnGoToAboutWith88} >goto about with 88</button>
                <ul>
                    {studewntsStr}
                    nir  <br/> chen
                </ul>
            </div>
        );
    }
}

export default withRouter(Home);
import React, { Component } from 'react';

export default class CCChild extends Component {
    constructor(props) {
        super(props);

        this.numbers = [1, 2, 3, 4, 5];
        this.listNumbers = this.numbers.map((number, index) =>
            <a href="#" className="list-group-item" key={index}>{number * 2}</a>
        );

        this.state = {
            userName: 'insert...'
        };
    }

    btnSendtoParent = () => {
        this.props.sendData('7');
    }


    chntxt = (e) => {
        this.setState({
            userName:  e.target.value.toUpperCase()
        });
    }
    render() {
        return (
            <div>
                CHILD
                <button onClick={this.btnSendtoParent}>sendtoParent</button> <br />

                <input type="text" onChange={this.chntxt} value={this.state.userName + "1"} /> <br />
                {this.state.userName} <br />
                <p style={{ fontWeight: "bold", margin: 10 }}>numbers list:</p>
                <div className="list-group" style={{ width: "20%" }}>{this.listNumbers}</div>
            </div>
        );
    }
}
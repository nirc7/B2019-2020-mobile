import React, { Component } from 'react';

export default class CCPerson extends Component {
    constructor(props) {
        super(props);
        let lnum = 8;
        this.age = 30;
        this.state = {
            name: props.name,
            grade: 80
        };
    }

    btnLearn = () => {
        console.log(1);
        this.setState(
            {
                grade: this.state.grade + 5,
                eyeColor:"red"
            }
        );

    }

    render() {


        let superS='';
        if (this.state.grade===100) {
            superS = <div>super s</div>
        }

        return (
            <div>
                <p>
                    CCPerson
                    age  = {this.age} <br />
                    name = {this.state.name} <br />
                    grade =  {this.state.grade} <br />
                    eyeColor = {this.state.eyeColor} <br/>
                    <button onClick={this.btnLearn} >Learn</button>
                    {superS}
                </p>
            </div>
        );
    }
}
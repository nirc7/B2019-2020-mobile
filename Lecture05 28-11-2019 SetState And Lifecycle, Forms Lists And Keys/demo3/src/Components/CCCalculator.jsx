import React, { Component } from 'react';
import { parenthesizedExpression } from '@babel/types';

export default class CCCalculator extends Component {
    constructor(props) {
        super(props);

        this.num1 = 9;
        this.num2 = 10;
        this.state = {
            txtNum1: '',
            num2: null,
            //sum:'...'
        };
    }

    txt1Changed = (e) => {
        this.num1 = e.target.value;
        console.log(this.num1);
        // this.setState({
        //     txtNum1: e.target.value
        // });
    }

    txt2Changed = (e) => {
        this.num2 = e.target.value;
        console.log(this.num2);
        //this.setState({num2:  parseInt( e.target.value)});
    }

    btnAdd=()=>{
        this.setState({
            //sum:parseInt(this.state.txtNum1) + this.state.num2
            sum: parseInt(this.num1) + parseInt(this.num2)
        });
    }

    componentDidMount(){
        
    }

    render() {
        // let SorB = '';
        // if (this.state.sum < 5) {
        //     SorB = "SMALL";
        // }
        // else{
        //     SorB='BIG!';
        // }

        return (
            <div>
            
                {this.num1} <br/>
                {this.num2} <br/>

                NUM1: <input type="text" onChange={this.txt1Changed} /> <br /> <br />
                NUM2: <input type="text" onChange={this.txt2Changed} /> <br /> <br />
                <button
                    style={{
                        margin: 5,
                        border: 'solid white 2px'
                    }} className="btn btn-danger" onClick={this.btnAdd}>+</button>
                <div>{this.state.sum}</div> <br/>
                { this.state.sum < 5? 'small':'BIG'}
                {this.state.sum === undefined && <div style={{color:'red'}}>no val yet...</div>}
            </div>
        );
    }
}

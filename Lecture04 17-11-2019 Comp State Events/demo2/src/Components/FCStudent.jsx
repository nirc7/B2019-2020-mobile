import React from 'react';

export default function FCStudent(props) {

    let num = 7;


    function addBonus(b) {
        console.log(props.grade + b);
        //props.grade = 200;
        num = 8;
    }

    //addBonus(20);

    function btnLearn() {
        //props.grade+=5;
        num += 5;
        console.log(num);

    }


    if (props.grade === 100) {
        return (
                <p>
                    super student
                </p>
        );
    }
    else{
        return (
                <p>
                    num={num} <br />
                    FCStudent <br />
                    your name is: {props.name}  <br />
                    and the grade is: {props.grade + 5} <br />
                    {props.grade <= 99 ? <div>smaller</div> : <div>bigger</div>}
                    {addBonus(7)}
                    num = {num} <br />
                    <button onClick={btnLearn}>learn</button>
                </p>
        );
    }
}
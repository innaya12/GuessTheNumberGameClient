import React from 'react'


class Computer extends React.Component {


    guess = Math.floor(Math.random() * max) + min;

    render(){

        return(
            <div>
                <h1>computer's guesses </h1>      
            </div>
        )
    }
}

export default Computer;
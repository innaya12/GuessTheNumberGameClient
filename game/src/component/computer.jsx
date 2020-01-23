// import React from 'react'


// class Computer extends React.Component {
//     constructor(props){
//         super(props);
//         this.state({
//             randomGuess: ''
//         })
//     }

//     randomNumbers(min, max){
//         let randomGuess = Math.floor(Math.random() * this.props.max) + this.props.min;
//         this.setState({
//             randomGuess
//         })
//     }

//     render(){
//         console.log("this.props.max",this.props.max)
//         const {randomGuess} = this.state;
//         return(
//             <div>
//                 <h1>computer's guesses </h1>  
//                 <P>{randomGuess}</P>    
//             </div>
//         )
//     }
// }

// export default Computer;
import React from 'react'
import PlayersHistory from './history'
import Computer from './computer'


class Player extends React.Component {
    constructor(props){
        supoer(props);
        this.state({
            chosen_number : '',
            player: ''

        })
    }
    onCheck = (e) => {
        //start playing
    }; 

    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value,
        });
        
    };

    render(){

        return(
            <div>
                <h1>Guess the Number Game</h1>

                <p>Please choose range of numbers to play</p>
                <div>
                    <select id="inputState" className="form-control" name={"min_number"} onChange={this.handleChange}>
                        <option defaultValue>choose min number</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>  
                </div>
                <div>
                    <select id="inputState" className="form-control" name={"max_number"} onChange={this.handleChange}>
                        <option defaultValue>choose max number</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>  
                </div> 
                <button onClick={this.onCheck}>Start playing</button>         
                <PlayersHistory />
                <Computer   handleChange={this.handleChange}
                                player={this.state.player}
                                />
            </div>
        )
    }
}

export default Player;
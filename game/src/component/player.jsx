import React from 'react'
import {getHistoryByPlayer, addPlayerToDB,getPlayers} from '../data/player'
import History from './history'

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: [],
            player: '',
            history: {},
            name: '',
            chosen_number : '',
            randomGuess: '',
            message:'',
            playingStatus: 'settingGame',
            min: '',
            max: '',
            correct:'',
            smaller:'',
            bigger: ''
        }
    }

    Playing(){
        let randomGuess = this.randomNumbers();
        this.setState({
            randomGuess
        })
    }

    randomNumbers(){
        return Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min);
    }

    continuePlaying(name){
        if(name === "bigger"){
            this.setState({
                min: this.state.randomGuess
            }, ()=>{
                this.Playing()}
            )
        } else if (name === "smaller"){
            this.setState({
                max: this.state.randomGuess
            }, ()=>{
                this.Playing()}
            )
        } else{
            this.setState({
                chosen_number : this.state.randomGuess,
                playingStatus :"won",
                message: `Game Over! Your chosen number is ${this.state.randomGuess}`
            })        
        }
    }
    
    onCheckName = async e => {
        e.preventDefault();
        const players = await getPlayers(this.state.name);
        const player = players.find(player => player.player_name === this.state.name)
        if(player){
            const num_of_games = player.num_of_games
            const history = await getHistoryByPlayer(player.id);
            this.setState({
                history,
                num_of_games: num_of_games+1,
                player,
                message: `Wellcome Back ${player.player_name}`,
                playingStatus: "setRange"
            })
        } else {
            this.setState({
                num_of_games: 1,
                message: `Wellcome ${this.state.name}`,
                playingStatus: "setRange"
            })
        }
        const addingNewPlayer = await addPlayerToDB(this.state.name, this.state.num_of_games);
    }
    onCheck = (e) => {
        if(this.state.max <= this.state.min){
            this.setState({
                playingStatus: "invalid",
                message : "The numbers are set wrong!" + "please try again" 
            })
        } else {
            this.setState({
                message: '',
                playingStatus: "play"
            }, this.Playing())
        }
    }; 

    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value,
        });
        if(value === "on"){
            this.continuePlaying(name);
        }
    };

    render(){
        const {randomGuess, message,  playingStatus, history} = this.state;
        const mainStyle = {width:"600px", height:"350px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)"};
        const inputWrapper = {paddingTop: "10px"};
        const inputStyle = {borderRadius: "10px", width: "90%", fontSize: "14px"};
        return(
            <div>
                {history && 
                <History history={this.state.history}/>
                }
                <div style={mainStyle} className={"d-3 d-lg-inline col-md-offset-4 regForm"}>
                    <h1 style={{padding:"20px 0"}}>Guess the Number Game</h1>
                    {playingStatus === "settingGame" && 
                    <div className={"col-sm-12"} style={inputWrapper}>
                        <input type={"text"} className={"form-control"} 
                            placeholder={"name"}
                            name={"name"}
                            style={inputStyle} onChange={this.handleChange}/>
                        <button className={"col-md-4 col-md-offset-4 btn"}
                            style={{
                                backgroundColor: "#ffffff",
                                color: "#626a69",
                                fontSize: "20px",
                                marginTop: "10px"}}
                            type={"button"} onClick={this.onCheckName}>Enter
                        </button>
                    </div>  
                    }
                    {playingStatus === "setRange" && 
                    <div>
                        <h4>{message}</h4>
                        <p>Please choose range of numbers to play</p>
                        <div className={"col-4 col-md-6"} style={inputWrapper}>
                            <select style={inputStyle}  id="inputState" className="form-control" name={"min"} onChange={this.handleChange}>
                                <option defaultValue>choose min number</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>  
                        </div>
                        <div className={"col-4 col-md-6"} style={inputWrapper}>
                            <select style={inputStyle}  id="inputState" className="form-control" name={"max"} onChange={this.handleChange}>
                                <option defaultValue>choose max number</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>  
                        </div> 
                        <div className={"col-8 col-md-10"} style={inputWrapper}>
                            <button onClick={this.onCheck}>Start playing</button>      
                            {playingStatus === "invalid" && 
                            <p style={{fontWeight:"bold"}}>{message}</p>}
                        </div>
                    </div>  
                    }
                    {playingStatus === "play" && 
                    <div className={"col-8 col-md-10"} style={inputWrapper}>
                        <p>{randomGuess}</p>
                        <div className={"btn-group btn-group-toggle"} data-toggle={"buttons"}>
                            <h6>The number is :</h6>
                            <label className={"btn btn-secondary active"} style={{backgroundColor:"lightblue"}} > 
                                <input type={"radio"} name={"correct"} onChange={this.handleChange} id={"option1"} autoComplete={"off"} /> correct
                            </label>
                            <label className={"btn btn-secondary"} style={{backgroundColor:"lightblue"}} >
                                <input type={"radio"} name={"smaller"} onChange={this.handleChange} id={"option2"} autoComplete={"off"}/> smaller
                            </label>
                            <label className={"btn btn-secondary"} style={{backgroundColor:"lightblue"}} >  
                                <input type={"radio"} name={"bigger"} onChange={this.handleChange} id={"option3"} autoComplete={"off"}/> Bigger
                            </label>
                        </div>
                    </div>
                    }
                    {playingStatus === "won" && 
                    <div className={"col-8 col-md-10"} style={inputWrapper}>
                        <h2>{message}</h2>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Player;
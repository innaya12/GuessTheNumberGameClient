import React from 'react'
import {getHistoryByPlayer} from '../data/player'

class PlayersHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: null,
            player:''
        };
    }
    // async componentDidMount() {
    //     // let player = Cookies.get('auth');
    //     // this.setState({
    //     //     player 
    //     // })

    //     try {
    //         const history = await getHistoryByPlayer(playerId)
    //         this.setState({
    //             history
    //         });
    //     }catch(error){
    //         console.log(error.message)
    //     }
    // };



    render(){
        const {history, player} = this.state;
        return(
            <div>
                <h1>History Game</h1>      
                {!this.state.player ?
                <p>No games playied yet</p> 
                :
                <div>
                    <h1> we have a player</h1>
                </div>
                }
            </div>
        )
    }
}

export default PlayersHistory;
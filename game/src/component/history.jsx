import React from 'react'
import {getHistoryByPlayer} from '../data/player'
import './style.css'
class PlayersHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // history: null,
            // player:''
        };
    }
   

    render(){
        const {history} = this.props;
        return(
            <div>
                <h1>History Game</h1>     
                {/* <table>
                    <thead>
                        <th>name</th>
                        <th>date</th>
                        <th>range</th>
                        <th>chosen number</th>
                        <th>amount of guesses</th>
                        <th>list of guessed numbers by computer</th>
                    </thead>
                        {history.length !== 0 &&
                            history.map((game, i) =>
                            <tbody>
                                <td key={i}>{game.name}</td>
                                <td key={i}>{game.name}</td>
                                <td key={i}>{game.name}</td>
                                <td key={i}>{game.name}</td>
                                <td key={i}>{game.name}</td>
                                <td key={i}>{game.name}</td>
                            </tbody>
                            )
                        }
                </table>  */}
            </div>
        )
    }
}

export default PlayersHistory;
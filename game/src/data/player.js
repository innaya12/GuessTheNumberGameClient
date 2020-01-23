import fetcher from './fetcher';

const getPlayers = async () => {
    try {
        const player = await fetcher.get('/players');
        return player.data;
    }catch(error){
        console.log(error)
    }
} 

const getHistoryByPlayer = async (playerId) => {
    try {
        const history = await fetcher.get(`/history/${playerId}`);
        return history.data;
    }catch(error){
        console.log(error)
    }
} 

const addPlayerToDB = async (name, num_of_games) => {
    try{
        const add = await fetcher.post('/players', {name, num_of_games});
        console.log("addd")
        return add;
    }catch(error){
        console.log(error)
    }
}


export {getHistoryByPlayer,getPlayers, addPlayerToDB};
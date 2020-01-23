import fetcher from './fetcher';

const getPlayer = async (playerId) => {
    try {
        const player = await fetcher.get('/player');
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

export {getHistoryByPlayer,getPlayer};
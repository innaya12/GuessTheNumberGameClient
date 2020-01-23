import fetcher from './fetcher';


const getHistoryByPlayer = async (playerId) => {
    try {
        const history = await fetcher.get(`/history/${playerId}`);
        return history.data;
    }catch(error){
        console.log(error)
    }
} 

export {getHistoryByPlayer};
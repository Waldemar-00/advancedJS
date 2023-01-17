const timer = ( endTime, selector ) => {
    const getTimeRemaining = ( end ) => {
        const remainingTime = +new Date(end) - Date.now(); 
        const seconds = Math.floor((remainingTime / 1000) % 60);
        const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
        const hours =  Math.floor((remainingTime / 1000 / 60 / 60) % 24);
        const days = Math.floor((remainingTime / 1000 / 60 / 60) / 24);
        return {
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
            "remainingTime": remainingTime,
        };
    };
    console.log(getTimeRemaining(endTime));
};
export default timer;
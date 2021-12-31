function engineDigitalwatch() {

    let intervalID;
   
    function updateTime( callbackFunction ) {

        function getCurrenTime() {

            const currentTime = new Date();
            let hours = Number( currentTime.getHours() );
            let minutes = Number( currentTime.getMinutes() );
            let seconds = Number( currentTime.getSeconds() );
    
            return {
                hours,
                minutes,
                seconds
            }
    
        }
       
        intervalID = setInterval( () => {
            let time = getCurrenTime();
            callbackFunction( { time } );
        }, 50);
    
    }

    function reset() {
        clearInterval( intervalID );
        intervalID = null;
    }
   
    return {
        updateTime,
        reset      
    }
}

export { engineDigitalwatch }
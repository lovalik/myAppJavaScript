function timerEngine(){

    let intervalID = null;
    let secondsLeftToTimeIsUp;
          
    function update( { seconds, displayTime } ) {

        const secondsFromUNIXWhenStart = Math.floor( Date.now() / 1000 );
                        
        if ( intervalID != null ) {
            
            return
        
        } 

        intervalID = setInterval( () => {

            let currentSecondsFromUnix = Math.floor( Date.now() / 1000 );
            let secondsHavePastFromStart = currentSecondsFromUnix - secondsFromUNIXWhenStart;
                    
            secondsLeftToTimeIsUp = seconds - secondsHavePastFromStart;

            displayTime( secondsLeftToTimeIsUp  );
                    
        }, 10);            
            
    }

    function pause() {

        clearInterval( intervalID );

        intervalID = null;

    }

    function reset( ) {

        clearInterval( intervalID );

        intervalID = null;
                
    }

    return {
        update,
        pause,
        reset
    }
}

export { timerEngine }

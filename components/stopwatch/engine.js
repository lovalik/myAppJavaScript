function engineStopwatch( ) {

    let intervalID;
    
    function start( callback, millisecPausedDuration ) {

        let millSecondsFromUNIXWhenStart = Date.now();

        if ( intervalID ) {

            return
        
        }
                   
        intervalID = setInterval( () => {

            let deltaMilliseconds = millisecPausedDuration + Date.now() - millSecondsFromUNIXWhenStart;
            callback( deltaMilliseconds );

        }, 10 );
               
    }

    function pause() {

        if ( intervalID ) {

            clearInterval( intervalID );
            intervalID = null;

        }

    }

    function reset() {

        if ( intervalID ) {

            clearInterval( intervalID );
            intervalID = null;

        }
        
    }
    
    return {
        start,
        pause,
        reset   
    }
}

export { engineStopwatch };

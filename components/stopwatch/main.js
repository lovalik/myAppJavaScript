import { ui } from "./ui.js";
import { engineStopwatch } from "./engine.js";
import { convertMillisecToTimeValue } from "./utilities.js";

function createStopwatch( {
    appLanguage,
    timeParameters,
    writeStatusToApp,
    appendStopwatchToApp,
    removeStopwatchFromApp,
    } ) {

    const methodsEngine = engineStopwatch();
    let stopwatchState = {
        tag: "stopwatch",
        parameters: {
            status: "reseted",
            millisecUNIX: 0,
            msecPaused: 0
        }
    }

    if ( timeParameters ) { 

        stopwatchState.parameters = timeParameters;

    }

    writeStatusToApp( stopwatchState );
    
    const methodsUI = ui( {
        appLanguage,
        start: function( button ) {
            animationForButtonStartAndPause( button, start );
        },
        pause: function( button ) {
            animationForButtonStartAndPause( button, pause );
        },
        reset: function( button ) {
            animationForButtonCloseAndReset( button, reset );
        },
        close: function( button ) {
            animationForButtonCloseAndReset( button, close );
        }  
    } );

    methodsUI.appendItemToApplication( appendStopwatchToApp );
    restoreStopwatchState();

    function restoreStopwatchState() {

        if ( stopwatchState.parameters.status == "paused" ) {
            
            const time = convertMillisecToTimeValue( stopwatchState.parameters.msecPaused );
            methodsUI.displayTimeOnScoreBoard( { time } );
    
        } else if ( stopwatchState.parameters.status == "started" ) {
    
            let millisecWnenRestored = Date.now() + stopwatchState.parameters.msecPaused - stopwatchState.parameters.millisecUNIX;
            methodsEngine.start( updateTime, millisecWnenRestored );

        } else if ( stopwatchState.parameters.status == "reseted" ) {
            
            const time = convertMillisecToTimeValue( 0 );
            methodsUI.displayTimeOnScoreBoard( { time } );

        }
    }

    function updateTime( deltaMilliseconds ) {
    
        let time = convertMillisecToTimeValue( deltaMilliseconds );
        methodsUI.displayTimeOnScoreBoard( { time } );
        stopwatchState.parameters.millisecUNIX = Date.now();
        stopwatchState.parameters.msecPaused = deltaMilliseconds;

    }

    function start() {

        methodsEngine.start( updateTime, stopwatchState.parameters.msecPaused );
        stopwatchState.parameters.status = "started";
        writeStatusToApp( stopwatchState );

    }

    function pause() {

        methodsEngine.pause();
        stopwatchState.parameters.status = "paused";
        stopwatchState.parameters.millisecUNIX = 0;
        writeStatusToApp( stopwatchState );

    }

    function reset() {
        
        methodsEngine.reset();
        let time = convertMillisecToTimeValue( 0 );
        methodsUI.displayTimeOnScoreBoard( { time });
        stopwatchState.parameters.status = "reseted";
        stopwatchState.parameters.millisecUNIX = 0;
        stopwatchState.parameters.msecPaused = 0;
        writeStatusToApp( stopwatchState );

    }

    function close() {
        methodsEngine.reset();
        removeStopwatchFromApp();
    }

    function animationForButtonStartAndPause( button, callback ) {

        methodsUI.startAnimationForControlButtons( button ),
        callback();

        setTimeout( () => {
            methodsUI.stopAnimationForControlButtons( button );
        }, 400 )

    }

    function animationForButtonCloseAndReset( button, callback ) {

        methodsUI.startAnimationForControlButtons( button ),

        setTimeout( () => {
            callback();
            methodsUI.stopAnimationForControlButtons( button );
        }, 400 )

    }
}

export { createStopwatch }

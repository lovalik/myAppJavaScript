import { ui } from "./ui.js";
import { timerEngine } from "./engine.js";
import { convertSecondsToTimeValue } from "./utilities.js";

function createTimer( {
    appLanguage,
    timeParameters,
    writeStatusToApp,
    appendTimerToApp,
    removeTimerFromApp, 
    } ) {

    const methodsEngine = timerEngine();
    let intervalIDforAnimationTimeIsOut;
    let timer = {
        tag: "timer",
        parameters: {
            status: "reseted",
            millisecUNIX: 0,
            msecPaused: 0,
            animationStatus: {
                "is animation `time is out` execute?": false,
                "duration animation `time is out` (msec)": 60000,
                "msecUNIX when animation `time is out` start": null,
                "how much time is left for execution animation `time is out` ": null
            }
        }
    } 

    if ( timeParameters ) { 

        timer.parameters = timeParameters;

    }
    
    writeStatusToApp( timer );

    const methodsUI = ui( {
        appLanguage,
        start: function( button ) {
            animationForButtonStartAndPause( button, start )
        },
        pause: function( button ) {
            animationForButtonStartAndPause( button, pause )
        },
        reset: function( button ) {
            animationForButtonCloseAndReset( button, reset );
        },
        close: function( button ) {
            animationForButtonCloseAndReset( button, close );
        },
        increaseValueUnits: ( cell ) => {
            increaseValueUnits( cell );
            timer.parameters.status = "paused";
            timer.parameters.msecPaused = methodsUI.convertTimeFromScoreboardToSeconds();
        },
        decreaseValueUnits: ( cell ) => {
            decreaseValueUnits( cell );
            timer.parameters.status = "paused";
            timer.parameters.msecPaused = methodsUI.convertTimeFromScoreboardToSeconds();
        },
        increaseValueDecades: ( cell ) => {
            increaseValueDecades( cell );
            timer.parameters.status = "paused";
            timer.parameters.msecPaused = methodsUI.convertTimeFromScoreboardToSeconds();
        },
        decreaseValueDecades: ( cell ) => {
            decreaseValueDecades( cell );
            timer.parameters.status = "paused";
            timer.parameters.msecPaused = methodsUI.convertTimeFromScoreboardToSeconds();
        },
        stopAnimation: () => {
            stopAnimationWhenTimeIsOut();
        }

    });

    methodsUI.appendTimerToDestination( appendTimerToApp );
    restoreTimerState();

    function restoreTimerState() {

        if ( timer.parameters.animationStatus[ "is animation `time is out` execute?" ] ){

            let timePassed = Date.now() - timer.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ];
            let animationTimeIsLeft = timer.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ];
            let durationForAnimation = animationTimeIsLeft - timePassed;

            if ( durationForAnimation > 0 ) {

                startAnimationWhenTimeIsOut( durationForAnimation );

            } else {

                timer.parameters.animationStatus[ "is animation `time is out` execute?" ] = false;
                timer.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ] = null;
                timer.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ] = null;
            
            }

        }

        if ( timer.parameters.status == "paused" ) {

            const time = convertSecondsToTimeValue( timer.parameters.msecPaused );
            methodsUI.displayTime( { time } );

        } else if ( timer.parameters.status == "started" ) {

            let durationShutdown = ( Math.floor( Date.now() / 1000 ) ) - timer.parameters.millisecUNIX;
            let seconds = timer.parameters.msecPaused - durationShutdown;

            if ( seconds < 0 ) {
                
                methodsEngine.reset();
                methodsUI.unhideSettingButtons();
                const time = convertSecondsToTimeValue( 0 );
                methodsUI.displayTime( { time } );
                let animationDuration = timer.parameters.animationStatus[ "duration animation `time is out` (msec)" ];
                startAnimationWhenTimeIsOut( animationDuration );
                timer.parameters.status = "reseted";
                timer.parameters.millisecUNIX = 0;
                timer.parameters.msecPaused = 0;
                
                return
                        
            }

            methodsUI.hideSettingButtons();
            methodsEngine.update( { seconds, displayTime } );

        }

    }

    function decreaseValueUnits( cell ) {

        let value = Number( cell.innerHTML );

        if ( value > 0 && value <= 9 ) {

            cell.innerHTML = value - 1;

        } else if ( value == 0 ) {

            cell.innerHTML = 9;

        }
    
    }

    function decreaseValueDecades( cell ) {

        let value = Number( cell.innerHTML );

        if ( value > 0 && value <= 5 ) {

            cell.innerHTML = value - 1;

        } else if ( value == 0 ) {

            cell.innerHTML = 5;

        }

    }

    function increaseValueUnits( cell ) {

        let value = Number( cell.innerHTML );

        if ( value < 9 ) {

            cell.innerHTML = value + 1;

        } else if ( value == 9 ) {

            cell.innerHTML = 0;

        }

    }

    function increaseValueDecades( cell ) {

        let value = Number( cell.innerHTML );

        if ( value < 5 ) {

            cell.innerHTML = value + 1;

        } else if ( value == 5 ) {

            cell.innerHTML = 0;

        }

    }

    function displayTime( secondsLeftToTimeIsUp ) {

        if ( secondsLeftToTimeIsUp <= 0 ) {

            methodsEngine.reset();
            methodsUI.unhideSettingButtons()
            const time = convertSecondsToTimeValue( 0 );
            methodsUI.displayTime( { time } );
            let animationDuration = timer.parameters.animationStatus[ "duration animation `time is out` (msec)" ];
            startAnimationWhenTimeIsOut( animationDuration );
            timer.parameters.status = "reseted";
            timer.parameters.millisecUNIX = 0;
            timer.parameters.msecPaused = 0;
            
            return
                    
        } else {

            timer.parameters.msecPaused = secondsLeftToTimeIsUp;
            timer.parameters.millisecUNIX = Math.floor( Date.now() / 1000 );
            const time = convertSecondsToTimeValue( secondsLeftToTimeIsUp );
            methodsUI.displayTime( { time } );

        }

    }

    function start() {

        stopAnimationWhenTimeIsOut();
        let seconds = methodsUI.convertTimeFromScoreboardToSeconds();

        if ( seconds == 0 ) {

            animationWhenUserNotSetTime();
            return

        } 

        methodsEngine.update( { seconds, displayTime } );
        methodsUI.hideSettingButtons();
        timer.parameters.status = "started";
        timer.parameters.millisecUNIX = Math.floor( Date.now() / 1000 );

    }

    function pause() {

        stopAnimationWhenTimeIsOut();
        methodsEngine.pause();
        methodsUI.unhideSettingButtons();
        timer.parameters.status = "paused";
        timer.parameters.millisecUNIX = 0;
        timer.parameters.msecPaused = methodsUI.convertTimeFromScoreboardToSeconds();

    }

    function reset() {

        stopAnimationWhenTimeIsOut();
        methodsEngine.reset();
        const time = convertSecondsToTimeValue( 0 );
        methodsUI.displayTime( { time } );
        methodsUI.unhideSettingButtons( );
        timer.parameters.status = "reseted";
        timer.parameters.millisecUNIX = 0;
        timer.parameters.msecPaused = 0;

    }

    function close() {
        methodsEngine.reset();
        removeTimerFromApp();
    }

    function animationWhenUserNotSetTime() {

        methodsUI.startAnimationWhenTimeUserNotSetTime();

        setTimeout( () => {
            methodsUI.stopAnimationWhenTimeUserNotSetTime();
        }, 2800 );

    }

    function startAnimationWhenTimeIsOut( duration ) {

        methodsUI.startAnimationWhenTimeIsOut();
        timer.parameters.animationStatus[ "is animation `time is out` execute?" ] = true;
        timer.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ] = Date.now();
        timer.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ] = duration;

        intervalIDforAnimationTimeIsOut = setTimeout( () => {

            methodsUI.stopAnimationWhenTimeIsOut();
            timer.parameters.animationStatus[ "is animation `time is out` execute?" ] = false;
            timer.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ] = null;
            timer.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ] = null;
    
        }, duration );

    }

    function stopAnimationWhenTimeIsOut() {

        clearTimeout( intervalIDforAnimationTimeIsOut );
        intervalIDforAnimationTimeIsOut = null;
        methodsUI.stopAnimationWhenTimeIsOut();
        timer.parameters.animationStatus[ "is animation `time is out` execute?" ] = false;
        timer.parameters.animationStatus[ "msecUNIX when animation `time is out` start" ] = null;
        timer.parameters.animationStatus[ "how much time is left for execution animation `time is out` " ] = null;

    }

    function animationForButtonStartAndPause( button, callback ) {

        methodsUI.startAnimationForControlButtonOnLeftAndRightSide( button ),
        callback();

        setTimeout( () => {
            methodsUI.stopAnimationForControlButtonOnLeftAndRightSide( button );
        }, 400 )

    }

    function animationForButtonCloseAndReset( button, callback ) {

        methodsUI.startAnimationForControlButtonOnLeftAndRightSide( button ),

        setTimeout( () => {
            callback();
            methodsUI.stopAnimationForControlButtonOnLeftAndRightSide( button );
        }, 400 )

    }

}

export { createTimer }

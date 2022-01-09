import { createTemplate } from "./template.js";
import { dictionary } from "./dictionary.js";

function ui( {
    appLanguage,
    start,
    pause,
    reset,
    close
} ) {

    const dictionaryForTemplate = dictionary[ appLanguage ];

    const stopwatch = document.createElement( 'div' );
    stopwatch.className = "stopwatch";
    stopwatch.insertAdjacentHTML( 'beforeend', createTemplate( dictionaryForTemplate ) );

    const buttonClose = stopwatch.querySelector( ".stopwatch__button-close" );
    const buttonStart = stopwatch.querySelector( ".stopwatch__button-start" );
    const buttonPause = stopwatch.querySelector( ".stopwatch__button-pause" );
    const buttonReset = stopwatch.querySelector( ".stopwatch__button-reset" );

    const cellHoursDecades = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_hours_decades" );
    const cellHoursInits = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_hours_units" );
    const cellMinutesDecades = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_minutes_decades" );
    const cellMinutesUnits = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_minutes_units" );
    const cellSecondsDecades = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_seconds_decades" );
    const cellSecondsUnits = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_seconds_units" );
    const cellMilliSecondsDecades = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_milliseconds_decades" );
    const cellMilliSecondsUnits = stopwatch.querySelector( ".stopwatch__LCDdisplay-middle-part_milliseconds_units" );

    const cellsWhereDisplayTime = [
        cellHoursDecades,
        cellHoursInits,
        cellMinutesDecades,
        cellMinutesUnits,
        cellSecondsDecades,
        cellSecondsUnits,
        cellMilliSecondsDecades,
        cellMilliSecondsUnits
    ];
    
    buttonClose.addEventListener( "click", () => {
        close( buttonClose );
    } ); 

    buttonStart.addEventListener( "click", () => {
        start( buttonStart );
    } ); 

    buttonPause.addEventListener( "click", () => {
        pause( buttonPause );
    } ); 

    buttonReset.addEventListener( "click", () => {
        reset( buttonReset );
    } ); 

    function appendItemToApplication( callback ) {
        callback( stopwatch )
    }

    function displayTimeOnScoreBoard( { time } ) {

        cellsWhereDisplayTime[0].innerHTML = time[0];
        cellsWhereDisplayTime[1].innerHTML = time[1];
        cellsWhereDisplayTime[2].innerHTML = time[2];
        cellsWhereDisplayTime[3].innerHTML = time[3];
        cellsWhereDisplayTime[4].innerHTML = time[4];
        cellsWhereDisplayTime[5].innerHTML = time[5]; 
        cellsWhereDisplayTime[6].innerHTML = time[6];
        cellsWhereDisplayTime[7].innerHTML = time[7];
                      
    }

    function startAnimationForControlButtons( button ) {
        button.classList.add("stopwatch__animation-for-control-buttons");
        button.disabled = true;
    }

    function stopAnimationForControlButtons( button ) {
        button.classList.remove("stopwatch__animation-for-control-buttons" );
        button.disabled = false;
    }

    return {
        appendItemToApplication,
        displayTimeOnScoreBoard,
        startAnimationForControlButtons,
        stopAnimationForControlButtons
    }

}

export { ui }
    

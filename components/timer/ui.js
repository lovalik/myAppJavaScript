import { template } from "./template.js";
import { dictionary } from "./dictionary.js";

function ui( {
    appLanguage,
    start,
    pause,
    reset,
    close,
    increaseValueUnits,
    decreaseValueUnits,
    increaseValueDecades,
    decreaseValueDecades,
    stopAnimation
} ) {

    let dictionaryForTemplate = dictionary[ appLanguage ];

    const timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = template( dictionaryForTemplate );

    const LCDDisplayWrapper = timer.querySelector(".timer__LCDdisplay_wrapper");
    const collectionAllButtons = timer.querySelectorAll( ".timer__button-close, .timer__button-start, .timer__button-pause, .timer__button-reset, .timer__button-increase-value, .timer__button-decrease-value" );
    const buttonClose = timer.querySelector( ".timer__button-close" );
    const buttonStart = timer.querySelector( ".timer__button-start" );
    const buttonPause = timer.querySelector( ".timer__button-pause" );
    const buttonReset = timer.querySelector( ".timer__button-reset" );

    const popupTitleWhenIncreaseValue = timer.querySelector( ".timer-popup-title-increase-value" );
    const popupTitleWhenDecreaseValue = timer.querySelector( ".timer-popup-title-decrease-value" );
    const popupTitleWhenUserNotSetTime = timer.querySelector( ".timer__title-for-animation-when-user-not-set-time" );
    const popupTitleWhenTimeIsOut = timer.querySelector( ".timer__title-for-animation-when-time-is-out" );

    const collectionAllSettingButtons = timer.querySelectorAll( ".timer__button-increase-value, .timer__button-decrease-value" );
    const buttonIncreaseHoursDecades = timer.querySelector( ".timer__increase-hours_decades" );
    const buttonIncreaseHoursUnits = timer.querySelector( ".timer__increase-hours_units" );
    const buttonIncreaseMinutesDecades = timer.querySelector( ".timer__increase-minutes_decades" );
    const buttonIncreaseMinutesUnits = timer.querySelector( ".timer__increase-minutes_units" );
    const buttonIncreaseSecondsDecades = timer.querySelector( ".timer__increase-seconds_decades" );
    const buttonIncreaseSecondsUnits = timer.querySelector( ".timer__increase-seconds_units" );

    const buttonDecreaseHoursDecades = timer.querySelector( ".timer__decrease-hours_decades" );
    const buttonDecreaseHoursUnits = timer.querySelector( ".timer__decrease-hours_units" );
    const buttonDecreaseMinutesDecades = timer.querySelector( ".timer__decrease-minutes_decades" );
    const buttonDecreaseMinutesUnits = timer.querySelector( ".timer__decrease-minutes_units" );
    const buttonDecreaseSecondsDecades = timer.querySelector( ".timer__decrease-seconds_decades" );
    const buttonDecreaseSecondsUnits = timer.querySelector( ".timer__decrease-seconds_units" );

    const cellHoursDecades = timer.querySelector( ".timer__LCDdisplay_hours_decades" );
    const cellHoursUnits = timer.querySelector( ".timer__LCDdisplay_hours_units" );
    const cellMinutesDecades = timer.querySelector( ".timer__LCDdisplay_minutes_decades" );
    const cellMinutesUnits = timer.querySelector( ".timer__LCDdisplay_minutes_units" );
    const cellSecondsDecades = timer.querySelector( ".timer__LCDdisplay_seconds_decades" );
    const cellSecondsUnits = timer.querySelector( ".timer__LCDdisplay_seconds_units" );

    const collectionDigits = [
        cellHoursDecades,
        cellHoursUnits,
        cellMinutesDecades,
        cellMinutesUnits,
        cellSecondsDecades,
        cellSecondsUnits
    ]

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
    
    buttonIncreaseHoursDecades.addEventListener( "click", () => {
        increaseValueUnits( cellHoursDecades );
    });

    buttonIncreaseHoursDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseHoursDecades ); 
        unhideTitleForButtonIncreaseValue();
        stopAnimation();    
    });

    buttonIncreaseHoursDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseHoursDecades );
        hideTitleForButtonIncreaseValue();        
    });
        
    buttonIncreaseHoursUnits.addEventListener( "click", () => {
        increaseValueUnits( cellHoursUnits );
    });
    
    buttonIncreaseHoursUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseHoursUnits );   
        unhideTitleForButtonIncreaseValue();
        stopAnimation();  
    });

    buttonIncreaseHoursUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseHoursUnits );
        hideTitleForButtonIncreaseValue();        
    });

    buttonIncreaseMinutesDecades.addEventListener( "click", () => {
        increaseValueDecades( cellMinutesDecades );
    });

    buttonIncreaseMinutesDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseMinutesDecades );     
        unhideTitleForButtonIncreaseValue();    
        stopAnimation();  
    });

    buttonIncreaseMinutesDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseMinutesDecades );
        hideTitleForButtonIncreaseValue();        
    });
    
    buttonIncreaseMinutesUnits.addEventListener( "click", () => {
        increaseValueUnits( cellMinutesUnits );
    });

    buttonIncreaseMinutesUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseMinutesUnits );     
        unhideTitleForButtonIncreaseValue();        
        stopAnimation();  
    });

    buttonIncreaseMinutesUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseMinutesUnits );
        hideTitleForButtonIncreaseValue();        
    });
    
    buttonIncreaseSecondsDecades.addEventListener( "click", () => {
        increaseValueDecades( cellSecondsDecades );
    });

    buttonIncreaseSecondsDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseSecondsDecades );     
        unhideTitleForButtonIncreaseValue();        
        stopAnimation();  
    });

    buttonIncreaseSecondsDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseSecondsDecades );
        hideTitleForButtonIncreaseValue();        
    });
    
    buttonIncreaseSecondsUnits.addEventListener( "click", () => {
        increaseValueUnits( cellSecondsUnits );
    });

    buttonIncreaseSecondsUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonIncreaseSecondsUnits );     
        unhideTitleForButtonIncreaseValue();        
        stopAnimation();  
    });

    buttonIncreaseSecondsUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonIncreaseSecondsUnits );
        hideTitleForButtonIncreaseValue();        
    });
    
    buttonDecreaseHoursDecades.addEventListener( "click", () => {
        decreaseValueUnits( cellHoursDecades );
    });

    buttonDecreaseHoursDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseHoursDecades ); 
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseHoursDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseHoursDecades );
        hideTitleForButtonDecreaseValue();
    });
    
    buttonDecreaseHoursUnits.addEventListener( "click", () => {
        decreaseValueUnits( cellHoursUnits );
    });

    buttonDecreaseHoursUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseHoursUnits );     
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseHoursUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseHoursUnits );
        hideTitleForButtonDecreaseValue();
    });
    
    buttonDecreaseMinutesDecades.addEventListener( "click", () => {
        decreaseValueDecades( cellMinutesDecades );
    });
    
    buttonDecreaseMinutesDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseMinutesDecades );     
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseMinutesDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseMinutesDecades );
        hideTitleForButtonDecreaseValue();    
    });

    buttonDecreaseMinutesUnits.addEventListener( "click", () => {
        decreaseValueUnits( cellMinutesUnits );
    });

    buttonDecreaseMinutesUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseMinutesUnits );     
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseMinutesUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseMinutesUnits );
        hideTitleForButtonDecreaseValue();
    });
    
    buttonDecreaseSecondsDecades.addEventListener( "click", () => {
        decreaseValueDecades( cellSecondsDecades );
    });

    buttonDecreaseSecondsDecades.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseSecondsDecades );     
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseSecondsDecades.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseSecondsDecades );
        hideTitleForButtonDecreaseValue();
    });
    
    buttonDecreaseSecondsUnits.addEventListener( "click", () => {
        decreaseValueUnits( cellSecondsUnits );
    });

    buttonDecreaseSecondsUnits.addEventListener( "mouseover", () => {
        highlightDigitWithRedColor( buttonDecreaseSecondsUnits );     
        unhideTitleForButtonDecreaseValue();
        stopAnimation();  
    });

    buttonDecreaseSecondsUnits.addEventListener( "mouseout", () => {
        highlightDigitWithIheritColor( buttonDecreaseSecondsUnits );
        hideTitleForButtonDecreaseValue();
    });

    function appendTimerToDestination( callback ) {
        callback( timer );
    }

    function hideSettingButtons() {
        for ( let element of collectionAllSettingButtons ) {

            element.style.display = "none";

        }
    }

    function unhideSettingButtons() {
        for ( let element of collectionAllSettingButtons ) {

            element.style.display = "inline-block";

        }
    }

    function convertTimeFromScoreboardToSeconds( ) {
                       
        const hoursDecade = Number( collectionDigits[0].innerHTML ) * 10 * 3600;
        const hoursUnits = Number( collectionDigits[1].innerHTML ) * 3600;
        const minDecade = Number( collectionDigits[2].innerHTML ) * 10 * 60;
        const minUnits = Number( collectionDigits[3].innerHTML ) * 60;
        const secDecade = Number( collectionDigits[4].innerHTML ) * 10;
        const secUnits = Number( collectionDigits[5].innerHTML );
        const seconds = hoursDecade + hoursUnits + minDecade + minUnits + secDecade + secUnits;
       
        return seconds;
    
    }

    function displayTime( { time } ) {

        cellHoursDecades.innerHTML = time[0];
        cellHoursUnits.innerHTML = time[1];
        cellMinutesDecades.innerHTML = time[2];
        cellMinutesUnits.innerHTML = time[3];
        cellSecondsDecades.innerHTML = time[4];
        cellSecondsUnits.innerHTML = time[5];
        
    }

    function startAnimationWhenTimeUserNotSetTime() {

        popupTitleWhenUserNotSetTime.style.display = "block"
        popupTitleWhenUserNotSetTime.classList.add( "timer__animation-when-user-not-set-value_for-title" );

        for ( let button of collectionAllButtons ) {
    
            button.disabled = true;
    
        }
    
        for ( let digit of collectionDigits ) {
    
            digit.classList.add( "timer__animation-when-user-not-set-value_for-digits");

        }

        for ( let button of collectionAllSettingButtons ) {

            button.classList.add("timer__animation-when-user-not-set-value_for-buttons" );
    
        }

    }

    function stopAnimationWhenTimeUserNotSetTime() {

        popupTitleWhenUserNotSetTime.classList.remove( "timer__animation-when-user-not-set-value_for-title" );
        popupTitleWhenUserNotSetTime.style.display = "none";

        for ( let button of collectionAllButtons ) {
    
            button.disabled = false;
    
        }

        for ( let digit of collectionDigits ) {
    
            digit.classList.remove( "timer__animation-when-user-not-set-value_for-digits");

        }

        for ( let digit of collectionAllSettingButtons ) {
    
            digit.classList.remove( "timer__animation-when-user-not-set-value_for-buttons");

        }

    }

    function startAnimationWhenTimeIsOut() {
        popupTitleWhenTimeIsOut.style.display = "block";
        popupTitleWhenTimeIsOut.classList.add( "timer__animation-when-time-is-out-for-title" );
        LCDDisplayWrapper.classList.add( "timer__animation-when-time-is-out-for-digits" );
    }   

    function stopAnimationWhenTimeIsOut() {
        LCDDisplayWrapper.classList.remove( "timer__animation-when-time-is-out-for-digits" );
        popupTitleWhenTimeIsOut.classList.remove( "timer__animation-when-time-is-out-for-title" );
        popupTitleWhenTimeIsOut.style.display = "none";
    }

    function startAnimationForControlButtonOnLeftAndRightSide( button ) {
        button.classList.add("timer__animation-for-button-press");
        button.disabled = true;
    }

    function stopAnimationForControlButtonOnLeftAndRightSide( button ) {

        button.classList.remove("timer__animation-for-button-press");
        const animationPlays = popupTitleWhenUserNotSetTime.classList.contains("timer__animation-when-user-not-set-value_for-title");

        if( !animationPlays ) {

            button.disabled = false;

        }

    }

    function highlightDigitWithRedColor( button ) {
        button.closest(".timer__LCDdisplay_block-digit-button").firstElementChild.style.color = "red";
    }

    function highlightDigitWithIheritColor( button ) {
        button.closest(".timer__LCDdisplay_block-digit-button").firstElementChild.style.color = "inherit";
    }

    function unhideTitleForButtonIncreaseValue(){
        popupTitleWhenIncreaseValue.style.display = "block";
    }

    function hideTitleForButtonIncreaseValue(){
        popupTitleWhenIncreaseValue.style.display = "none";
    }

    function unhideTitleForButtonDecreaseValue(){
        popupTitleWhenDecreaseValue.style.display = "block";
    }

    function hideTitleForButtonDecreaseValue(){
        popupTitleWhenDecreaseValue.style.display = "none";
    }
    
    return {
        appendTimerToDestination,
        hideSettingButtons,
        unhideSettingButtons,
        convertTimeFromScoreboardToSeconds,
        displayTime,
        startAnimationForControlButtonOnLeftAndRightSide,
        startAnimationWhenTimeIsOut,
        startAnimationWhenTimeUserNotSetTime,
        stopAnimationForControlButtonOnLeftAndRightSide,
        stopAnimationWhenTimeIsOut,
        stopAnimationWhenTimeUserNotSetTime
        
    }

}

export { ui }
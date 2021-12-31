import { createTemplate } from "./template.js";
import { dictionary } from "./dictionary.js";

function appUI( {
    appLanguage,
    addStopwatch,
    addDigitalwatch,
    addTimer,
    close,
    changeAppLanguage,
    } ) {

    const dictionaryForTemplate = dictionary[ appLanguage ];
    const myAppWrapper = document.createElement( 'div' );
    myAppWrapper.className = "myApplication";
    myAppWrapper.innerHTML = createTemplate( dictionaryForTemplate );

    const buttonAddDigitalwatch = myAppWrapper.querySelector( '.application__button-add-digitalwatch' );
    const buttonAddStopwatch = myAppWrapper.querySelector( '.application__button-add-stopwatch' );
    const buttonAddTimer = myAppWrapper.querySelector( '.application__button-add-timer' );
    const buttonCloseAll = myAppWrapper.querySelector( '.application__button-close-all-items' );
    const buttonSelectLanguage = myAppWrapper.querySelector( '.application__button-select-language' );
    const selectLanguageMenu = myAppWrapper.querySelector( '.application__select-language-menu' );
    const rowEnglishLanguage = myAppWrapper.querySelector( '.application__select-language-menu-row-for-english' );
    const rowRussianLanguage = myAppWrapper.querySelector( '.application__select-language-menu-row-for-russian' );
    const flagEngland = myAppWrapper.querySelector( '.application__flag-England' );
    const flagRussia = myAppWrapper.querySelector( '.application__flag-Russia' );
    const itemBar = myAppWrapper.querySelector( '.application__app-itembar_wrapper' );
    const sectionForItems = myAppWrapper.querySelector( '.application__section-for-items' );

    buttonAddDigitalwatch.addEventListener( "click", () => {
        addDigitalwatch();
    } );

    buttonAddStopwatch.addEventListener( "click", () => {
        addStopwatch();
    } );

    buttonAddTimer.addEventListener( "click", () => {
        addTimer();
    } );

    buttonCloseAll.addEventListener( "click", () => {
        close();
    } );

    buttonSelectLanguage.addEventListener( "click", () => {

        unhideElement( selectLanguageMenu, "block" );

        if ( appLanguage == "rus" ) {

            rowRussianLanguage.lastElementChild.innerHTML = "&#8226";

        } else if ( appLanguage == "eng" ){

            rowEnglishLanguage.lastElementChild.innerHTML = "&#8226";

        }

    })

    selectLanguageMenu.addEventListener( 'mouseover', () => {
        unhideElement( selectLanguageMenu, "block" )
    } );

    selectLanguageMenu.addEventListener( 'mouseout', () => {
        hideElement( selectLanguageMenu );
    } );

    rowEnglishLanguage.addEventListener( "click", () => {
        changeAppLanguage( "eng" );
        hideElement( selectLanguageMenu );
    } );

    rowRussianLanguage.addEventListener( "click", () => {
        changeAppLanguage( "rus" );
        hideElement( selectLanguageMenu );
    } );

    function appendDigitalwatchToApp() {
        const wrapperForItem = document.createElement( 'div' );
        sectionForItems.append( wrapperForItem );
        wrapperForItem.className = 'application__wrapper-for-item';

        return wrapperForItem
    }

    function appendStopwatchToApp() {
        const wrapperForItem = document.createElement( 'div' );
        sectionForItems.append( wrapperForItem );
        wrapperForItem.className = 'application__wrapper-for-item';

        return wrapperForItem
    }

    function appendTimerToApp() {
        const wrapperForItem = document.createElement( 'div' );
        sectionForItems.append( wrapperForItem );
        wrapperForItem.className = 'application__wrapper-for-item';

        return wrapperForItem
    }

    function removeDigitalwatchFromApp( elem ){ 

        if ( !elem.previousElementSibling && !elem.nextElementSibling  ){

            hideItembar();
            hideButtonClose();
            elem.remove();

        } else {

            elem.remove();
  
        }
        
    }

    function removeStopwatchFromApp( elem ){ 

        if ( !elem.previousElementSibling && !elem.nextElementSibling  ){

            hideItembar();
            hideButtonClose();
            elem.remove();

        } else {

            elem.remove();
  
        }

    }

    function removeTimerFromApp( elem ){ 

        if ( !elem.previousElementSibling && !elem.nextElementSibling  ){

            hideItembar();
            hideButtonClose();
            elem.remove();

        } else {

            elem.remove();
  
        }

    }

    function appendAppToDestination( callback ) {
        callback( myAppWrapper )
    }

    function changeLanguageFlag( language ) {

        if ( language == "rus" ) {

            flagEngland.style.display = "none";
            flagRussia.style.display = "inline-block";

        } else if ( language == "eng" ) {

            flagEngland.style.display = "inline-block";
            flagRussia.style.display = "none";
            
        }

    }
   
    function unhideItembar() {
        itemBar.style.display = "block";
    }

    function hideItembar() {
        itemBar.style.display = null;
    }

    function unhideElement( element, typeBlock ) {
        element.style.display = typeBlock;
    }

    function hideElement( element ) {
        element.style.display = "none";
    }

    function hideButtonClose() {
        buttonCloseAll.style.display = null;
    }

    function unhideButtonClose() {
        buttonCloseAll.style.display = "inline-block";
    }

    function removeAllItems() {
        Array.from(sectionForItems.children).forEach( ( item ) => { item.remove() } );
    }

    return {
        appendAppToDestination,
        appendDigitalwatchToApp,
        appendStopwatchToApp,
        appendTimerToApp,
        removeDigitalwatchFromApp,
        removeStopwatchFromApp,
        removeTimerFromApp,
        changeLanguageFlag,
        unhideItembar,
        hideItembar,
        hideButtonClose,
        unhideButtonClose,
        removeAllItems
    }
}

export { appUI }

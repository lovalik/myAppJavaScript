import { ui } from "./ui.js";
import { engineDigitalwatch } from "./engine.js";
import { convertTimeUnderUTC24, convertTimeUnderUTC12, convertDate, convertIndexDayOfWeekToWord } from "./utilities.js";
import { dictionary } from "./dictionary.js";

function createDigitalwatch( {
    appLanguage,
    timeParameters,
    writeStatusToApp,
    appendDigitalwatchToApp,
    removeDigitalwatchFromApp
    } ) {

    const methodsEngine = engineDigitalwatch();   
    let city;
    let prefixUTC;
    let valueUTC;
    let digitalwatch = {
        tag: "digitalwatch",
        parameters: {
            city: "Minsk",
            valueUTC: 3,
            prefixUTC: "+",
            format24: true
        }
    }

    if ( timeParameters ) {

        digitalwatch.parameters = timeParameters;

    }

    digitalwatch.parameters.city = findInDictionaryNameOfCityInSelectedLanguage();
    writeStatusToApp( digitalwatch );

    function findInDictionaryNameOfCityInSelectedLanguage() {

        let city = digitalwatch.parameters.city;
        let cityNameForCurrentLanguage;
        let key1_ForCity;
        let key2_ForCity;

        for ( let lang in dictionary ) {

            for ( let timeZone in dictionary[ lang ] ) {

                for ( let cityName in dictionary[ lang ][ timeZone] ) {
    
                    if ( dictionary[ lang ][ timeZone ][ cityName ] == city ){
        
                        key1_ForCity = timeZone;
                        key2_ForCity = cityName;

                    }

                }
    
            }
    
        }

        cityNameForCurrentLanguage = dictionary[ appLanguage ][ key1_ForCity ][ key2_ForCity ];

        return cityNameForCurrentLanguage;

    }

    city = digitalwatch.parameters.city;
    prefixUTC = digitalwatch.parameters.prefixUTC;
    valueUTC = digitalwatch.parameters.valueUTC;
        
    const methodsUI = ui( {
        appLanguage,
        changeTimeFormat: ( button ) => {
            animationForButtonCloseAndFormat( button, changeTimeFormat );
        },
        unhideListOfCities: ( button ) => {

            methodsUI.startAnimationForControlButtons( button );
        
            setTimeout( () => {
                let city = digitalwatch.parameters.city;
                methodsUI.hideOrUnhideListOfCitiesUI();
                methodsUI.highlightCurrentCityInListOfCities( city );
            }, 150 )
        
            setTimeout( () => {
                methodsUI.stopAnimationForControlButtons( button );
            }, 400 )
        
        },
        changeTimeWhenSelectCity: () => {

            let values = methodsUI.recordParametersSelectedSity();
            let prefixUTC = values.prefixUTC;
            let valueUTC = values.valueUTC;
            let city = values.city;
            digitalwatch.parameters.prefixUTC = prefixUTC;
            digitalwatch.parameters.valueUTC = valueUTC;
            digitalwatch.parameters.city = city;

            methodsEngine.updateTime( displayTime )
            methodsUI.changeTimeZoneAndCityOnLCDdisplay( { valueUTC, city, prefixUTC } );

        },
        close: function( button ) {
            animationForButtonCloseAndFormat( button, close );
        },
        selectRow: function( row ) {
            let city = digitalwatch.parameters.city;
            methodsUI.selectElem( row, city );
        },
        deselectRow: function( row ) {
            let city = digitalwatch.parameters.city;
            methodsUI.deselectElem( row, city );
        },

    } );

    methodsUI.appendDigitalwatchToDestination( appendDigitalwatchToApp );
    methodsUI.changeTimeZoneAndCityOnLCDdisplay( { prefixUTC, valueUTC, city } );
    methodsEngine.updateTime( displayTime );

    function changeTimeFormat() {
    
        if ( digitalwatch.parameters.format24 == true ) {

            digitalwatch.parameters.format24 = false;

        } else if ( digitalwatch.parameters.format24 == false ) {

            digitalwatch.parameters.format24 = true;

        }

        methodsEngine.reset();
        methodsEngine.updateTime( displayTime );

    }

    function close() {
        methodsEngine.reset();
        removeDigitalwatchFromApp();
    }

    function displayTime( { time }) {

        let language = appLanguage;
        let timeToDisplay = {};
        let timeParameters;
        let prefixUTC = digitalwatch.parameters.prefixUTC;
        let valueUTC = digitalwatch.parameters.valueUTC;
        let format24H = digitalwatch.parameters.format24;
        let currentDate = convertDate( { prefixUTC, valueUTC } );

        if ( format24H ) {

            timeParameters = convertTimeUnderUTC24( { time, prefixUTC, valueUTC } );

        } else {

            timeParameters = convertTimeUnderUTC12( { time, prefixUTC, valueUTC } );

        }

        timeToDisplay.hoursDecades = Math.floor( timeParameters.valueForCellHours / 10 );
        timeToDisplay.hoursUnits = Math.floor( timeParameters.valueForCellHours % 10 );
        timeToDisplay.minutesDecades = Math.floor( timeParameters.valueForCellMinutes / 10 );
        timeToDisplay.minutesUnits = Math.floor( timeParameters.valueForCellMinutes % 10 );
        timeToDisplay.secondsDecades = Math.floor( timeParameters.valueForCellSeconds / 10 );
        timeToDisplay.secondsUnits = Math.floor( timeParameters.valueForCellSeconds % 10 );
        timeToDisplay.prefixPM = timeParameters.prefixPM;
        timeToDisplay.prefixAM = timeParameters.prefixAM;
        timeToDisplay.month = currentDate.currentMonthForSelectedCity_converted;
        timeToDisplay.date = currentDate.currentDateForSelectedCity;
        timeToDisplay.day = convertIndexDayOfWeekToWord( currentDate.currentDayForSelectedCity, language );

        methodsUI.displayTime( timeToDisplay );
    }


    function animationForButtonCloseAndFormat( button, callback ) {

        methodsUI.startAnimationForControlButtons( button ),

        setTimeout( () => {
            callback();
            methodsUI.stopAnimationForControlButtons( button );
        }, 300 )

    }

}
   
export { createDigitalwatch }






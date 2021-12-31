import { createTemplate } from "./template.js";
import { dictionary } from "./dictionary.js";

function ui( {
    appLanguage,
    changeTimeFormat,
    close,
    unhideListOfCities,
    changeTimeWhenSelectCity,
    selectRow,
    deselectRow
    } ) {

    const dictionaryForTemplate = dictionary[ appLanguage ];
    const digitalwatch = document.createElement( 'div' );
    digitalwatch.className = "digitalwatch";
    digitalwatch.innerHTML = createTemplate( dictionaryForTemplate );

    let selectedRow;
    const buttonClose = digitalwatch.querySelector( ".digitalwatch__button-close" );
    const buttonSelectCity = digitalwatch.querySelector( ".digitalwatch__button-select-city" );
    const buttonSelectTimeFormat = digitalwatch.querySelector( ".digitalwatch__button-select-time-format" );
    const listOfCities = digitalwatch.querySelector( ".digitalwatch__dropdown-list_wrapper" );
    const collectionRowsListOfCities = digitalwatch.querySelectorAll( ".digitalwatch__list-cities-for-time-zones tr" );
    const collectionCellCity = digitalwatch.querySelectorAll( ".digitalwatch__city" );
    const timeFormat_Number = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-format-number" );
    
    const cellDayOfWeek = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-top-part_dayofweek" );
    const cellDate = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-top-part_date" );
    const cellMonth = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-top-part_month" );
    const cellHoursDecades = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_hours_decades" );
    const cellHoursUnits = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_hours_units" );
    const cellMinutesDecades = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_minutes_decades" );
    const cellMinutesUnits = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_minutes_units" );
    const cellSecondsDecades = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_seconds_decades" );
    const cellSecondsUnits = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_seconds_units" );
    const cellLCDPrefix = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-bottom-part_prefixUTC" );
    const cellLCDValueUTC = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-bottom-part_valueUTC" );
    const cellLCDCity = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-bottom-part_city" );
    const cellAM = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_prefixAM" );
    const cellPM = digitalwatch.querySelector( ".digitalwatch__LCDdisplay-middle-part_prefixPM" );

    buttonClose.addEventListener( "click", () => {
        close( buttonClose );
    } );

    buttonSelectTimeFormat.addEventListener( "click", () => {
        changeTimeFormat( buttonSelectTimeFormat );
    } );
    
    buttonSelectCity.addEventListener( "click", () => {
        unhideListOfCities( buttonSelectCity );
    } );

    listOfCities.addEventListener( "click", () => {
        changeTimeWhenSelectCity();
        listOfCities.style.display = "none";
    } );

    listOfCities.addEventListener( "mouseover", () => {
        listOfCities.style.display = "block";
    } );

    listOfCities.addEventListener( "mouseout", () => {
        listOfCities.style.display = "none";
    } );

    for ( let row of collectionRowsListOfCities) {

        row.addEventListener( "mouseover", () => {
            selectRow( row );
        } );

        row.addEventListener( "mouseout", () => {
            deselectRow( row );
        })

    }

    function changeTimeZoneAndCityOnLCDdisplay( { prefixUTC, valueUTC, city } ) {
        cellLCDPrefix.innerHTML = prefixUTC;
        cellLCDValueUTC.innerHTML = valueUTC;
        cellLCDCity.innerHTML = city;
    }

    function recordParametersSelectedSity() {

        selectedRow = event.target.closest( "tr" );
        let prefixUTC = selectedRow.querySelector( ".digitalwatch__prefix" ).innerHTML;
        let valueUTC = Number( selectedRow.querySelector( ".digitalwatch__valueUTC" ).innerHTML );
        let city = selectedRow.querySelector( ".digitalwatch__city" ).innerHTML;

        return {
            prefixUTC,
            valueUTC,
            city
        }
    }

    function displayTime(  time ) {

        cellHoursDecades.innerHTML = time.hoursDecades;
        cellHoursUnits.innerHTML = time.hoursUnits;
        cellMinutesDecades.innerHTML = time.minutesDecades;
        cellMinutesUnits.innerHTML = time.minutesUnits;
        cellSecondsDecades.innerHTML = time.secondsDecades;
        cellSecondsUnits.innerHTML = time.secondsUnits;
        cellDayOfWeek.innerHTML = time.day;
        cellDate.innerHTML = time.date;
        cellMonth.innerHTML = time.month;

        if ( time.prefixPM ) {

            timeFormat_Number.innerHTML = 12;
            cellPM.style.display = "inline-block";

        } else {

            cellPM.style.display = "none";
            
        }

        if ( time.prefixAM ) {

            timeFormat_Number.innerHTML = 12;
            cellAM.style.display = "inline-block";

        } else {

            cellAM.style.display = "none";

        }

        if ( !time.prefixAM && !time.prefixPM) {

            timeFormat_Number.innerHTML = 24;

        }
    }

    function appendDigitalwatchToDestination( callback ) {
        callback( digitalwatch );
    }

    function highlightCurrentCityInListOfCities( city ) {

        let rowIndex = getCellParentElementIndex( collectionCellCity, city );

        for ( let row of collectionRowsListOfCities ) {

            row.style.color = "initial";
            row.style.textShadow = "initial";

            if ( row.sectionRowIndex == rowIndex ) {

                row.style.color = "white";
                row.style.textShadow = "2px 2px 3px black";

            }

        }

    }

    function getCellParentElementIndex( collection, value ) {

        for ( let cell of collection ) {

            if ( cell.innerHTML == value ) {

                return cell.parentElement.rowIndex;

            }
        }
    }

    function hideOrUnhideListOfCitiesUI() {

        if ( listOfCities.style.display == "none" || Boolean(listOfCities.style.display) == false ){

            listOfCities.style.display = "block";

        } else if ( listOfCities.style.display == "block" ) {

            listOfCities.style.display = "none";

        }

    }

    function selectElem( row, city ) {

        row.style.backgroundColor = "black";
        row.style.color = "white";

        if ( row.querySelector( ".digitalwatch__city").innerHTML == city ) {

            row.style.textShadow = " 2px 2px 3px red";

        }

    }

    function deselectElem( row, city ){

        row.style.backgroundColor = "initial";
        row.style.color = "initial";
        row.style.textShadow = "initial";

        if ( row.querySelector( ".digitalwatch__city").innerHTML == city ) {

            row.style.color = "white";
            row.style.textShadow = "2px 2px 3px black";

        }

    }

    function startAnimationForControlButtons( button ) {

        button.classList.add( "digitalwatch__animation-for-control-buttons" );
        button.disabled = true;

    }

    function stopAnimationForControlButtons( button ) {

        button.classList.remove( "digitalwatch__animation-for-control-buttons" );
        button.disabled = false;

    }

    return {
        displayTime,
        appendDigitalwatchToDestination,
        highlightCurrentCityInListOfCities,
        hideOrUnhideListOfCitiesUI,
        selectElem,
        deselectElem,
        changeTimeZoneAndCityOnLCDdisplay,
        recordParametersSelectedSity,
        startAnimationForControlButtons,
        stopAnimationForControlButtons
    }

}

export { ui }

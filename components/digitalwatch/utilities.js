import { dictionary } from "./dictionary.js";

function convertTimeUnderUTC24( { time, prefixUTC, valueUTC } ) {

    let valueForCellHours;
    let valueForCellMinutes;
    let valueForCellSeconds;
    let prefixPM = false;
    let prefixAM = false;
    let hours = time.hours;
    let minutes = time.minutes;
    let seconds = time.seconds;

    valueForCellMinutes = minutes;
    valueForCellSeconds = seconds;
        
    if ( prefixUTC == "-" ) {

        hours = hours - valueUTC - 3;

    } else if ( prefixUTC == "+" ) {

        hours = hours + valueUTC - 3;

    }

    if ( hours < 10 && hours > 0) {

        valueForCellHours = hours;

    } else if ( hours >= 10 && hours < 24 ){
        
        valueForCellHours = hours;
        
    } else if ( hours < 0 ) {

        valueForCellHours = hours + 24;

    } else if ( hours == 0 ) {

        valueForCellHours = 0;

    } else if ( hours > 23 ) {


        valueForCellHours = hours - 24;

    }
    
    return {
        valueForCellHours,
        valueForCellMinutes,
        valueForCellSeconds,
        prefixPM,
        prefixAM
    }

}

function convertTimeUnderUTC12( { time, prefixUTC, valueUTC } ) {

    let valueForCellHours;
    let valueForCellMinutes;
    let valueForCellSeconds;
    let prefixPM;
    let prefixAM;
    let hours = time.hours;
    let minutes = time.minutes;
    let seconds = time.seconds;
    
    valueForCellMinutes = minutes;
    valueForCellSeconds = seconds;

    if ( prefixUTC == "-" ) {

        hours = hours - valueUTC - 3;

    } else {

        hours = hours + valueUTC - 3;

    }

    if ( hours <= 9 && hours >= 1 ) {

        prefixPM = false;
        prefixAM = true;
        valueForCellHours = hours;

    } else if ( hours >= 10 && hours < 12 ){

        prefixPM = false;
        prefixAM = true;
        valueForCellHours = hours;
            
    } else if ( hours == 12 ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = hours; 

    } else if ( hours >= 13 && hours < 22 ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = hours - 12;

    } else if ( hours >= 22 && hours < 24 ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = hours - 12;

    } else if ( hours == 0 || hours == 24) {

        prefixPM = false;
        prefixAM = true;
        valueForCellHours = 12;

    } else if ( hours < 0 && hours > (-3) ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = hours + 12;

    } else if ( hours <= ( -3 ) && hours > ( -12 ) ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = hours + 12;

    } else if ( hours < -12 ) {

        prefixPM = false;
        prefixAM = true;
        valueForCellHours = 24 + hours;

    } else if (hours == ( -12 ) ) {

        prefixPM = true;
        prefixAM = false;
        valueForCellHours = 12;
        
    } else if ( hours > 24 ) {

        prefixPM = false;
        prefixAM = true;
        valueForCellHours = hours - 24;

    }

    return {
        valueForCellHours,
        valueForCellMinutes,
        valueForCellSeconds,
        prefixPM,
        prefixAM
    }

}

function convertDate( { prefixUTC, valueUTC } ) {

    const currentUTCTime = new Date();

    let currentUTChours = Number( currentUTCTime.getUTCHours() );
    let currentUTCdate = Number( currentUTCTime.getUTCDate() );
    let currentUTCday = Number( currentUTCTime.getUTCDay() );
    let currentUTCmonth = Number( currentUTCTime.getUTCMonth() );
    let currentUTCyear = Number( currentUTCTime.getUTCFullYear() );
    let amountDaysInMonthForCurrentUTCtime;

    if ( currentUTCmonth == 11 ) {

        amountDaysInMonthForCurrentUTCtime = Number( new Date( currentUTCyear, 12, 1 ).getUTCDate() );

    } else {

        amountDaysInMonthForCurrentUTCtime = Number( new Date( currentUTCyear, ( currentUTCmonth + 1 ), 1 ).getUTCDate() );

    }


    let currentHoursForSelectedCity;
    let currentDayForSelectedCity;
    let currentDateForSelectedCity;
    let currentMonthForSelectedCity;

    if ( prefixUTC == "+" ) {

        currentHoursForSelectedCity = currentUTChours + valueUTC;

    } else if ( prefixUTC == "-" ) {

        currentHoursForSelectedCity = currentUTChours - valueUTC;

    }


    if ( currentHoursForSelectedCity >= 0 &&  currentHoursForSelectedCity < 24 ) {

        currentDayForSelectedCity = currentUTCday;
        currentDateForSelectedCity = currentUTCdate;
        currentMonthForSelectedCity = currentUTCmonth;

    }
    

    if ( currentHoursForSelectedCity >= 24 ) {

        currentDayForSelectedCity = currentUTCday + 1;

        if ( currentDayForSelectedCity > 6 ) {

            currentDayForSelectedCity = 0;

        }

        currentDateForSelectedCity = currentUTCdate + 1;
        currentMonthForSelectedCity = currentUTCmonth;

        if ( currentDateForSelectedCity > amountDaysInMonthForCurrentUTCtime ) {

            currentDateForSelectedCity = 1;

            currentMonthForSelectedCity = currentUTCmonth + 1;

        }

        if ( currentMonthForSelectedCity > 11) {

            currentMonthForSelectedCity = 0;

        };

    }
    
    
    if ( currentHoursForSelectedCity < 0 ) {

        currentDayForSelectedCity = currentUTCday - 1;
        currentMonthForSelectedCity = currentUTCmonth;
        currentDateForSelectedCity = currentUTCdate - 1;

        if ( currentDayForSelectedCity < 0 ) {

            currentDayForSelectedCity = 6;

        }

        if ( currentDateForSelectedCity == 0 ) {

            currentMonthForSelectedCity = currentUTCmonth - 1;
            currentDateForSelectedCity = Number( new Date( currentUTCyear, currentUTCmonth, 1 ).getUTCDate() );

        }

        if ( currentMonthForSelectedCity < 0 ) {

            currentMonthForSelectedCity = 11;
            currentDateForSelectedCity = Number( new Date( currentUTCyear - 1, 12, 1 ).getUTCDate() );

        }

    }
    
    let currentMonthForSelectedCity_converted = currentMonthForSelectedCity + 1;

    return {
        currentDayForSelectedCity,
        currentMonthForSelectedCity_converted,
        currentDateForSelectedCity
    }
}

function convertIndexDayOfWeekToWord( index, language ) {

    let day;
    let dictionaryForTemplate = dictionary[ language ];

    if ( index == 0 ) {

        day = dictionaryForTemplate[ "first day of week" ];

    } else if (  index == 1 ) {

        day = dictionaryForTemplate[ "second day of week" ];

    } else if (  index == 2 ) {

        day = dictionaryForTemplate[ "third day of week" ];

    } else if (  index == 3 ) {

        day =dictionaryForTemplate[ "forth day of week" ];

    } else if (  index == 4 ) {

        day = dictionaryForTemplate[ "fifth day of week" ];

    } else if (  index == 5 ) {

        day = dictionaryForTemplate[ "sixth day of week" ];

    } else if (  index == 6 ) {

        day = dictionaryForTemplate[ "seventh day of week" ];

    }

    return day;

}

export { convertTimeUnderUTC24, convertTimeUnderUTC12, convertDate, convertIndexDayOfWeekToWord }
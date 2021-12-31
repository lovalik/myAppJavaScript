function convertSecondsToTimeValue( seconds ) {

    let hoursDecade = Math.floor( Math.floor( seconds / 3600 ) / 10 );
    let hoursUnits = Math.floor( seconds / 3600 ) - hoursDecade * 10;
    let minutesDecade = Math.floor( ( Math.floor( seconds / 60 ) % 60 ) / 10 );
    let minutesUnits = Math.floor( seconds / 60 ) % 60 - minutesDecade * 10;
    let secondsDecade = Math.floor( ( seconds % 60 ) / 10 );
    let secondsUnits = seconds % 60 - secondsDecade * 10;

    return [
        hoursDecade,
        hoursUnits,
        minutesDecade,
        minutesUnits,
        secondsDecade,
        secondsUnits,
    ]

}

export { convertSecondsToTimeValue }
import { appUI } from "./ui.js";
import { createDigitalwatch } from "../digitalwatch/main.js";
import { createStopwatch } from "../stopwatch/main.js";
import { createTimer } from "../timer/main.js";

function createApp( { addApplicationToDocument } ) {

    let applicationState = {
        totalQuantity: 0,
        maxSequenceNumber: 0,
        language: "eng"  
    };

    if ( localStorage.getItem( `applicationState` ) !== null ) {
            
        applicationState =  JSON.parse( localStorage.getItem( `applicationState` ) );

    }

    const appLanguage = applicationState.language;

    const methodsUI = appUI( {
        appLanguage,
        addDigitalwatch: function() {

            if ( applicationState.totalQuantity == 0 ) {

                methodsUI.unhideItembar();
                methodsUI.unhideButtonClose();
    
            }
    
            ++applicationState.totalQuantity;
            ++applicationState.maxSequenceNumber;
         
            let uniqueIdentifier = applicationState.maxSequenceNumber;
            const wrapperForDigitalwatch = methodsUI.appendDigitalwatchToApp();
    
            createDigitalwatch( {
                appLanguage,
                timeParameters: null,
                writeStatusToApp: function( itemState ) {
                    applicationState[ uniqueIdentifier ] = itemState;
                },
                appendDigitalwatchToApp: function( digitalwatch ) {
                    wrapperForDigitalwatch.append( digitalwatch );
                },
                removeDigitalwatchFromApp: function() {
                    methodsUI.removeDigitalwatchFromApp( wrapperForDigitalwatch );
                    --applicationState.totalQuantity;
                    delete applicationState[ uniqueIdentifier ];
                }, 
                
            } )

        },

        addStopwatch: function() {

            if ( applicationState.totalQuantity == 0 ) {
    
                methodsUI.unhideItembar();
                methodsUI.unhideButtonClose();

            }
    
            ++applicationState.totalQuantity;
            ++applicationState.maxSequenceNumber;
            
            const uniqueIdentifier = applicationState.maxSequenceNumber;
            const wrapperForStopwatch = methodsUI.appendStopwatchToApp();
    
            createStopwatch( {
                appLanguage,
                timeParameters: null,
                writeStatusToApp: function( itemState ) {
                    applicationState[ uniqueIdentifier ] = itemState;
                },
                appendStopwatchToApp: function( stopwatch ) {
                    wrapperForStopwatch.append( stopwatch );
                },
                removeStopwatchFromApp: function( ) {
                    methodsUI.removeStopwatchFromApp( wrapperForStopwatch );
                    --applicationState.totalQuantity;
                    delete applicationState[ uniqueIdentifier ];
                }
            } )

        },
        
        addTimer: function() {

            if ( applicationState.totalQuantity == 0 ) {

                methodsUI.unhideItembar();
                methodsUI.unhideButtonClose();

            }
    
            ++applicationState.totalQuantity;
            ++applicationState.maxSequenceNumber;
         
            let uniqueIdentifier = applicationState.maxSequenceNumber;
            const wrapperForTimer = methodsUI.appendTimerToApp();
    
            createTimer( {
                appLanguage,
                timeParameters: null,
                writeStatusToApp: function( itemState ) {
                    applicationState[ uniqueIdentifier ] = itemState;
                },
                appendTimerToApp: function( timer ) {
                    wrapperForTimer.append( timer );
                },
                removeTimerFromApp: function( ) {
                    methodsUI.removeTimerFromApp( wrapperForTimer );
                    --applicationState.totalQuantity;
                    delete applicationState[ uniqueIdentifier ];
                }
            } )

        },

        close: function() {

            for ( let key in applicationState ) {

                if ( Number( key ) ) {

                    delete applicationState[ key ];

                }

            }

            applicationState.totalQuantity = 0;
            applicationState.maxSequenceNumber = 0,
            methodsUI.removeAllItems();
            methodsUI.hideItembar();
            methodsUI.hideButtonClose();

        },

        changeAppLanguage: ( language ) => {
            applicationState.language = language;
            localStorage.setItem( `applicationState`, JSON.stringify( applicationState ) );
            document.location.reload();
        },
        
    });

    methodsUI.appendAppToDestination( addApplicationToDocument );
    methodsUI.changeLanguageFlag( appLanguage );

    if ( applicationState.totalQuantity != 0) {

        methodsUI.unhideItembar();
        methodsUI.unhideButtonClose();
        restoreAppLastState();

    }
    
    function restoreAppLastState() {

        for ( let uniqueIdentifier in applicationState ) {

            if ( Number( uniqueIdentifier ) >= 0 && applicationState[ uniqueIdentifier ].tag == "digitalwatch" ) {

                const wrapperForDigitalwatch = methodsUI.appendDigitalwatchToApp();

                createDigitalwatch( {
                    appLanguage,
                    timeParameters: applicationState[ uniqueIdentifier ].parameters,
                    writeStatusToApp: function( itemState ) {
                        applicationState[ uniqueIdentifier ] = itemState;
                    },
                    appendDigitalwatchToApp: function( digitalwatch ) {
                        wrapperForDigitalwatch.append( digitalwatch );
                    },
                    removeDigitalwatchFromApp: function() {
                        methodsUI.removeDigitalwatchFromApp( wrapperForDigitalwatch );
                        --applicationState.totalQuantity;
                        delete applicationState[ uniqueIdentifier ];
                    }, 
                } )

            } else if ( Number( uniqueIdentifier ) >= 0 && applicationState[ uniqueIdentifier ].tag == "stopwatch" ) {
        
                const wrapperForStopwatch = methodsUI.appendStopwatchToApp();

                createStopwatch( {
                    appLanguage,
                    timeParameters: applicationState[ uniqueIdentifier ].parameters,
                    writeStatusToApp: function( itemState ) {
                        applicationState[ uniqueIdentifier ] = itemState;
                    },
                    appendStopwatchToApp: function( stopwatch ) {
                        wrapperForStopwatch.append( stopwatch );
                    },
                    removeStopwatchFromApp: function( ) {
                        methodsUI.removeStopwatchFromApp( wrapperForStopwatch );
                        --applicationState.totalQuantity;
                        delete applicationState[ uniqueIdentifier ];
                    }
                } )

            } else if ( Number( uniqueIdentifier ) >= 0 && applicationState[ uniqueIdentifier ].tag == "timer" ) {

                const wrapperForTimer = methodsUI.appendTimerToApp();
                
                createTimer( {
                    appLanguage,
                    timeParameters: applicationState[ uniqueIdentifier ].parameters,
                    writeStatusToApp: function( itemState ) {
                        applicationState[ uniqueIdentifier ] = itemState;
                    },
                    appendTimerToApp: function( timer ) {
                        wrapperForTimer.append( timer );
                    },
                    removeTimerFromApp: function( ) {
                        methodsUI.removeTimerFromApp( wrapperForTimer );
                        --applicationState.totalQuantity;
                        delete applicationState[ uniqueIdentifier ];
                    }
                } )

            }
        }

    }

    window.addEventListener( "beforeunload", () => {
        localStorage.setItem( `applicationState`, JSON.stringify( applicationState ) );
    } );

}

export { createApp }

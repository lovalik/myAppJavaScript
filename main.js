import { createApp } from "./components/app/main.js";

createApp( {
    
    addApplicationToDocument: function( myApplication ) {

        const applicationWrapper = document.createElement( "div" );
        document.body.prepend( applicationWrapper );
        applicationWrapper.className = "application-wrapper";

        applicationWrapper.append( myApplication );
        
    }

} );


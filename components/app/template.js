
function createTemplate( dictionary ) {

    return `<div class='application__statusbar_wrapper'>

                <div class="application__wrapper-for-secondary-buttons-left-side">
                                
                    <button type="button" class="application__button-in-statusbar application__button-select-language">

                        <div class="application__language-flag_wrapper">    
                            <div class="application__flag-England"></div>
                            <div class="application__flag-Russia"></div>
                        </div>

                        <div class="application__select-language-menu">

                        <div class="application__select-language-menu-row-for-english">
                            <span class="application__select-language-menu-english_word">${dictionary[ "select language menu" ].eng }</span>
                            <span class="application__select-language-menu-english_symbol"></span>
                        </div>
                        <div class="application__select-language-menu-row-for-russian">
                            <span class="application__select-language-menu-russian_word">${dictionary[ "select language menu" ].rus }</span>
                            <span class="application__select-language-menu-russian_symbol"></span>
                        </div>
                        
                    </div>

                    </button>
                
                </div>

                <div class="application__wrapper-for-all-add-buttons">
                    <div class='application__button-in-statusbar_wrapper application__button-add-digitalwatch_wrapper'>
                        <button type="button" class="application__button-in-statusbar application__button-add-digitalwatch">
                            <div class="application__button-text application__button-add-digitalwatch-text">${dictionary[ "button add digitalwatch" ] }</div>                        
                        </button>
                    </div>
                    <div class="application__button-in-statusbar_wrapper application__button-add-stopwatch_wrapper">
                        <button type="button" class="application__button-in-statusbar application__button-add-stopwatch">
                            <div class="application__button-text application__button-add-stopwatch-text">${dictionary[ "button add stopwatch" ] }</div>
                        </button>
                    </div>
                    <div class="application__button-in-statusbar_wrapper application__button-add-timer_wrapper">

                        <button type="button" class="application__button-in-statusbar application__button-add-timer">
                            <div class="application__button-text application__button-add-timer-text">${ dictionary[ "button add timer" ] }</div>
                        </button>

                    </div>
                </div>

                <div class="application__wrapper-for-secondary-buttons-right-side">
                    
                    <button type="button" class="application__button-in-statusbar application__button-close-all-items">
                        <p class="application__symbol-for-button-close-all-items"></p>
                    </button>

                </div>
            </div>
            <div class="application__app-itembar_wrapper">
                <div class="application__section-for-items"></div>
            </div>`
}
    
export { createTemplate }

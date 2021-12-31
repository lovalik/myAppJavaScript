function createTemplate( dictionary ){

    return `<div class="stopwatch__case">

                <div class="stopwatch__title-for-button stopwatch__title-for-button-left-side-top">${ dictionary [ "title_button-left-top" ] }</div>

                <div class="stopwatch__title-for-button stopwatch__title-for-button-left-side-bottom">${ dictionary [ "title_button-left-bottom" ] }</div>

                <div class="stopwatch__title-for-button stopwatch__title-for-button-right-side-top">${ dictionary [ "title_button-right-top" ] }</div>

                <div class="stopwatch__title-for-button stopwatch__title-for-button-right-side-bottom">${ dictionary [ "title_button-right-bottom" ] }</div>
                
                <div class="stopwatch__button-left-side-top_wrapper">
                    <div class="stopwatch__button-left-side-top_part1"></div>
                    <button type="button" class="stopwatch__button-left-side-top_part2 stopwatch__button-start"></button>
                    <div class="stopwatch__button-left-side-top_part3"></div>
                </div>

                <div class="stopwatch__button-left-side-bottom_wrapper">
                    <div class="stopwatch__button-left-side-bottom_part1"></div>
                    <button type="button" class="stopwatch__button-left-side-bottom_part2 stopwatch__button-pause"></button>
                    <div class="stopwatch__button-left-side-bottom_part3"></div>
                </div>

                <div class="stopwatch__button-right-side-top_wrapper">
                    <div class="stopwatch__button-right-side-top_part1"></div>
                    <button type="button" class="stopwatch__button-right-side-top_part2 stopwatch__button-close"></button>
                    <div class="stopwatch__button-right-side-top_part3"></div>
                </div>

                <div class="stopwatch__button-right-side-bottom_wrapper">
                    <div class="stopwatch__button-right-side-bottom_part1"></div>
                    <button type="button" class="stopwatch__button-right-side-bottom_part2 stopwatch__button-reset"></button>
                    <div class="stopwatch__button-right-side-bottom_part3"></div>
                </div>

                <div class="stopwatch__decorative-element">

                    <div class="stopwatch__main-area">

                        <div class="stopwatch__main-area-upper-part">
                            <div class="stopwatch__main-title">${ dictionary [ "main-title" ] }</div>
                        </div>

                        <div class="stopwatch__LCDdisplay_wrapper">
                            <div class="stopwatch__LCDdisplay-middle-part_wrapper">
                                <span class="stopwatch__LCDdisplay-middle-part_hours_decades"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_hours_units"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_colon">:</span>
                                <span class="stopwatch__LCDdisplay-middle-part_minutes_decades"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_minutes_units"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_colon">:</span>
                                <span class="stopwatch__LCDdisplay-middle-part_seconds_decades"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_seconds_units"></span>
                                <span class="stopwatch__LCDdisplay-middle-part_milliseconds_block">
                                    <span class="stopwatch__LCDdisplay-middle-part_milliseconds_title">${ dictionary [ "title_msec-on-LCDDislay" ] }</span>
                                    <span class="stopwatch__LCDdisplay-middle-part_milliseconds_decades"></span>
                                    <span class="stopwatch__LCDdisplay-middle-part_milliseconds_units"></span>
                                </span>
                            </div>
                        </div>

                        <div class="stopwatch__main-area_bottom-part"></div>
                        
                    </div>
                </div>
            </div>`
}

export { createTemplate }


    
        
    




function template( dictionary ){

    return `<div class="timer__case">

                <div class="timer__title-for-button timer__title-for-button-left-side-top">${ dictionary[ "title_button-left-top" ] }</div>

                <div class="timer__title-for-button timer__title-for-button-left-side-bottom">${ dictionary[ "title_button-left-bottom" ] }</div>

                <div class="timer__title-for-button timer__title-for-button-right-side-top">${ dictionary[ "title_button-right-top" ] }</div>

                <div class="timer__title-for-button timer__title-for-button-right-side-bottom">${ dictionary[ "title_button-right-bottom" ] }</div>
    
                <div class="timer__button-left-side-top_wrapper">
                    <div class="timer__button-left-side-top_part1"></div>
                    <button type="button" class="timer__button-left-side-top_part2 timer__button-start"></button>
                    <div class="timer__button-left-side-top_part3"></div>
                </div>

                <div class="timer__button-left-side-bottom_wrapper">
                    <div class="timer__button-left-side-bottom_part1"></div>
                    <button type="button" class="timer__button-left-side-bottom_part2 timer__button-pause"></button>
                    <div class="timer__button-left-side-bottom_part3"></div>
                </div>

                <div class="timer__button-right-side-top_wrapper">
                    <div class="timer__button-right-side-top_part1"></div>
                    <button type="button" class="timer__button-right-side-top_part2 timer__button-close"></button>
                    <div class="timer__button-right-side-top_part3"></div>
                </div>

                <div class="timer__button-right-side-bottom_wrapper">
                    <div class="timer__button-right-side-bottom_part1"></div>
                    <button type="button" class="timer__button-right-side-bottom_part2 timer__button-reset"></button>
                    <div class="timer__button-right-side-bottom_part3"></div>
                </div>

                <div class="timer__decorative-element">
                    <div class="timer__main-area">

                        <div class="timer__main-area-upper-part">
                            <div class="timer__main-title">${ dictionary[ "main-title" ] }</div>
                        </div>

                        <div class="timer__main-area-middle-part">
                            <div class="timer__LCDdisplay_wrapper">

                                <div class="timer-popup-title-increase-value">${ dictionary[ "popup-title_button-increase-value" ] }</div>

                                <div class="timer-popup-title-decrease-value">${ dictionary[ "popup-title_button-decrease-value" ] }</div>

                                <div class="timer__title-for-animation-when-time-is-out">${ dictionary[ "popup-title_when-time-is-out" ] }</div>

                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_hours_decades">
                                    <div class="timer__LCDdisplay_hours_decades">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-hours_decades"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-hours_decades"></button>
                                    </div>
                                </div>

                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_hours_units">
                                    <div class="timer__LCDdisplay_hours_units">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-hours_units"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-hours_units"></button>
                                    </div>
                                </div>

                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_colon">:</div>
                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_minutes_decades">
                                    <div class="timer__LCDdisplay_minutes_decades">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-minutes_decades"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-minutes_decades"></button>
                                    </div>
                                </div>
                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_minutes_units">
                                    <div class="timer__LCDdisplay_minutes_units">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-minutes_units"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-minutes_units"></button>
                                    </div>
                                </div>
                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_colon">:</div>
                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_seconds_decades">
                                    <div class="timer__LCDdisplay_seconds_decades">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-seconds_decades"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-seconds_decades"></button>
                                    </div>
                                </div>
                                <div class="timer__LCDdisplay_block-digit-button timer__LCDdisplay_block_seconds_units">
                                    <div class="timer__LCDdisplay_seconds_units">0</div>
                                    <div class="timer__button-increase-value_wrapper">
                                        <button type="button" class="timer__button-increase-value timer__increase-seconds_units"></button>
                                    </div>
                                    <div class="timer__button-decrease-value_wrapper">
                                        <button type="button" class="timer__button-decrease-value timer__decrease-seconds_units"></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timer__main-area_bottom-part">
                            <div class="timer__title-for-animation-when-user-not-set-time">${ dictionary[ "popup-title_when-user-not-set-time" ] }</div>
                        </div>

                    </div>
                </div>
            </div>`

}
export { template }



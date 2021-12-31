function createTemplate( dictionary ) {
    
    return `<div class="digitalwatch__case">

                <div class="digitalwatch__title-for-button digitalwatch__title-for-button-left-side-top">${ dictionary[ "title_button-left-top" ] }</div>

                <div class="digitalwatch__title-for-button digitalwatch__title-for-button-left-side-bottom">${ dictionary[ "title_button-left-bottom" ] }</div>

                <div class="digitalwatch__title-for-button digitalwatch__title-for-button-right-side-top">${ dictionary[ "title_button-right-top" ] }</div>

                <div class="digitalwatch__button-left-side-top_wrapper">
                    <div class="digitalwatch__button-left-side-top_part1"></div>
                    <button type="button" class="digitalwatch__button-left-side-top_part2 digitalwatch__button-select-time-format"></button>
                    <div class="digitalwatch__button-left-side-top_part3"></div>
                </div>
                
                <div class="digitalwatch__button-left-side-bottom_wrapper">
                    <div class="digitalwatch__button-left-side-bottom_part1"></div>
                    <button type="button" class="digitalwatch__button-left-side-bottom_part2 digitalwatch__button-select-city"></button>
                    <div class="digitalwatch__button-left-side-bottom_part3"></div>
                </div>

                <div class="digitalwatch__button-right-side-top_wrapper">
                    <div class="digitalwatch__button-right-side-top_part1"></div>
                    <button type="button" class="digitalwatch__button-right-side-top_part2 digitalwatch__button-close"></button>
                    <div class="digitalwatch__button-right-side-top_part3"></div>
                </div>

                <div class="digitalwatch__decorative-element">
                    <div class="digitalwatch__main-area">
                        <div class="digitalwatch__dropdown-list_wrapper">

                            <div class="digitalwatch__list-cities-for-time-zones_wrapper">

                                <div class="digitalwatch__list-cities-for-time-zones_overflow">
                                
                                    <table class="digitalwatch__list-cities-for-time-zones">
                                        <tr class="digitalwatch__utc-10">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">10</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-10 Hawaii">${ dictionary[ "time zone UTC -10:00" ][ "Hawaii" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-09">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">09</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-09 Anchorage">${ dictionary[ "time zone UTC -9:00" ][ "Anchorage" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-08 LosAngeles">${ dictionary[ "time zone UTC -8:00" ][ "Los-Angeles" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-08 SnFrancisco">${ dictionary[ "time zone UTC -8:00" ][ "Sn Francisco" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-08 Vancouver">${ dictionary[ "time zone UTC -8:00" ][ "Vancouver" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-07">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">07</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-07 Calgary">${ dictionary[ "time zone UTC -7:00" ][ "Calgary" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-06">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">06</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-06 Chicago">${ dictionary[ "time zone UTC -6:00" ][ "Chicago" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-06">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">06</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-06 Mexico">${ dictionary[ "time zone UTC -6:00" ][ "Mexico City" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-05 Havana">${ dictionary[ "time zone UTC -5:00" ][ "Havana" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-05 Montreal">${ dictionary[ "time zone UTC -5:00" ][ "Montreal" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-05 NewYork">${ dictionary[ "time zone UTC -5:00" ][ "New York" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-05 Washington">${ dictionary[ "time zone UTC -5:00" ][ "Washington" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-04">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">04</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-04 Caracas">${ dictionary[ "time zone UTC -4:00" ][ "Caracas" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-03 BuenosAires">${ dictionary[ "time zone UTC -3:00" ][ "Buenos-Aires" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-03 RioDeJaneiro">${ dictionary[ "time zone UTC -3:00" ][ "Rio-De-Janeiro" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc-03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">-</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc-03 Santiago">${ dictionary[ "time zone UTC -3:00" ][ "Santiago" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc00">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">00</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc00 Dakar">${ dictionary[ "time zone UTC 0:00" ][ "Dakar" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc00">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">00</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc00 Dublin">${ dictionary[ "time zone UTC 0:00" ][ "Dublin" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc00">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">00</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc00 Lisbon">${ dictionary[ "time zone UTC 0:00" ][ "Lisbon" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc00">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">00</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc00 London">${ dictionary[ "time zone UTC 0:00" ][ "London" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Berlin">${ dictionary[ "time zone UTC +1:00" ][ "Berlin" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Brussels">${ dictionary[ "time zone UTC +1:00" ][ "Brussels" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Madrid">${ dictionary[ "time zone UTC +1:00" ][ "Madrid" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Oslo">${ dictionary[ "time zone UTC +1:00" ][ "Oslo" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Paris">${ dictionary[ "time zone UTC +1:00" ][ "Paris" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Rome">${ dictionary[ "time zone UTC +1:00" ][ "Rome" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc01">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">01</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc01 Warsaw">${ dictionary[ "time zone UTC +1:00" ][ "Warsaw" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Athens">${ dictionary[ "time zone UTC +2:00" ][ "Athens" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Jerusalem">${ dictionary[ "time zone UTC +2:00" ][ "Jerusalem" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Kyiv">${ dictionary[ "time zone UTC +2:00" ][ "Kyiv" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Riga">${ dictionary[ "time zone UTC +2:00" ][ "Riga" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Sofia">${ dictionary[ "time zone UTC +2:00" ][ "Sofia" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Tallinn">${ dictionary[ "time zone UTC +2:00" ][ "Tallinn" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc02">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">02</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc02 Vilnius">${ dictionary[ "time zone UTC +2:00" ][ "Vilnius" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc03 Ankara">${ dictionary[ "time zone UTC +3:00" ][ "Ankara" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc03 Minsk">${ dictionary[ "time zone UTC +3:00" ][ "Minsk" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc03">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">03</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc03 Moscow">${ dictionary[ "time zone UTC +3:00" ][ "Moscow" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc04">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">04</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc04 Baku">${ dictionary[ "time zone UTC +4:00" ][ "Baku" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc04">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">04</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc04 Yerevan">${ dictionary[ "time zone UTC +4:00" ][ "Yerevan" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc04">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">04</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc04 Tbilisi">${ dictionary[ "time zone UTC +4:00" ][ "Tbilisi" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc05 Dushanbe">${ dictionary[ "time zone UTC +5:00" ][ "Dushanbe" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc05 Tashkent">${ dictionary[ "time zone UTC +5:00" ][ "Tashkent" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc05">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">05</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc05 Novosibirsk">${ dictionary[ "time zone UTC +5:00" ][ "Novosibirsk" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc06">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">06</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc06 Bishkek">${ dictionary[ "time zone UTC +6:00" ][ "Bishkek" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc06">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">06</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc06 Almaty">${ dictionary[ "time zone UTC +6:00" ][ "Almaty" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc06">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">06</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc06 Omsk">${ dictionary[ "time zone UTC +6:00" ][ "Omsk" ] }</td>

                                        </tr>
                                        <tr class="digitalwatch__utc07">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">07</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc07 Hanoi">${ dictionary[ "time zone UTC +7:00" ][ "Hanoi" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc07">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">07</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc07 Krasnoyarsk">${ dictionary[ "time zone UTC +7:00" ][ "Krasnoyarsk" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc08 Beijing">${ dictionary[ "time zone UTC +8:00" ][ "Beijing" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc08 Singapore">${ dictionary[ "time zone UTC +8:00" ][ "Singapore" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc08">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">08</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc08 Taiwan">${ dictionary[ "time zone UTC +8:00" ][ "Taiwan" ] }</td>
                                        </tr>
                                            <tr class="digitalwatch__utc09">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">09</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc09 Seoul">${ dictionary[ "time zone UTC +9:00" ][ "Seoul" ] }</td>
                                        <tr>
                                        <tr class="digitalwatch__utc09">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">09</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc09 Tokyo">${ dictionary[ "time zone UTC +9:00" ][ "Tokyo" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc10">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">10</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc10 Vladivostok">${ dictionary[ "time zone UTC +10:00" ][ "Vladivostok" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc11">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">11</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc11 Sydney">${ dictionary[ "time zone UTC +11:00" ][ "Sydney" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc12">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">12</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc12 Kingston">${ dictionary[ "time zone UTC +12:00" ][ "Kingston" ] }</td>
                                        </tr>
                                        <tr class="digitalwatch__utc13">
                                            <td>UTC</td>
                                            <td class="digitalwatch__prefix">+</td>
                                            <td class="digitalwatch__valueUTC">13</td>
                                            <td class="digitalwatch__null-null">:00</td>
                                            <td class="digitalwatch__city digitalwatch__city-utc13 Auckland">${ dictionary[ "time zone UTC +13:00" ][ "Auckland" ] }</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="digitalwatch__main-area-upper-part">
                            <div class="digitalwatch__main-title">${ dictionary[ "main-title" ] }</div>
                        </div>

                        <div class="digitalwatch__LCDdisplay_wrapper">

                            <div class="digitalwatch__LCDdisplay-top-part_wrapper">

                                <div class="digitalwatch__LCDdisplay-top-part-format12-24_wrapper">
                                    <span class="digitalwatch__LCDdisplay-format-number"></span>
                                    <span class="digitalwatch__LCDdisplay-format-letter">${ dictionary[ "time-format_letter" ] }</span>
                                </div>
                                
                                <div class="digitalwatch__LCDdisplay-top-part-currentdate_wrapper">
                                    <span class="digitalwatch__LCDdisplay-top-part_dayofweek"></span>
                                    <span class="digitalwatch__LCDdisplay-top-part_month">-</span>
                                    <span class="digitalwatch__LCDdisplay-top-part_hyphen">-</span>
                                    <span class="digitalwatch__LCDdisplay-top-part_date">-</span>
                                </div> 

                            </div>

                            <div class="digitalwatch__LCDdisplay-middle-part_wrapper">
                                <span class="digitalwatch__LCDdisplay-middle-part_prefixAM">AM</span>
                                <span class="digitalwatch__LCDdisplay-middle-part_prefixPM">PM</span>
                                <span class="digitalwatch__LCDdisplay-middle-part_hours_decades"></span>
                                <span class="digitalwatch__LCDdisplay-middle-part_hours_units"></span>
                                <span class="digitalwatch__LCDdisplay-middle-part_colon">:</span>
                                <span class="digitalwatch__LCDdisplay-middle-part_minutes_decades"></span>
                                <span class="digitalwatch__LCDdisplay-middle-part_minutes_units"></span>
                                <span class="digitalwatch__LCDdisplay-middle-part_seconds_decades"></span>
                                <span class="digitalwatch__LCDdisplay-middle-part_seconds_units"></span>
                            </div>

                            <div class="digitalwatch__LCDdisplay-bottom-part_wrapper">
                                <span class="digitalwatch__LCDdisplay-bottom-part_UTC">UTC</span>
                                <span class="digitalwatch__LCDdisplay-bottom-part_prefixUTC">+</span>
                                <span class="digitalwatch__LCDdisplay-bottom-part_valueUTC"></span>
                                <span class="digitalwatch__LCDdisplay-bottom-part_colon">:</span>
                                <span class="digitalwatch__LCDdisplay-bottom-part_nullnull">00</span>
                                <span class="digitalwatch__LCDdisplay-bottom-part_city"></span>
                            </div>

                        </div>
                    </div>
                </div>    
            </div>`
}

export { createTemplate }




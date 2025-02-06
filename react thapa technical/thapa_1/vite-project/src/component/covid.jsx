import React, { useEffect, useState } from 'react'
import '../component/covid.css'

const Covid = () => {
    const [data , setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
            const actualdata = await res.json()
            console.log(actualdata.data.regional);
            setData(actualdata.data.regional[0])

        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
           getCovidData()
    }, [])
    return (
        <>
        <section>

            <h1>Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>
                                <span>OUR</span> State 
                            </p>
                            <p className='card_total card1_small'>Andaman and Nicobar Isalands</p>
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>
                                <span>OUR</span> Confirmed Cases 
                            </p>
                            <p className='card_total card1_small'>{data.confirmedCasesIndian}</p>
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>
                                <span>OUR</span> Discharged
                            </p>
                            <p className='card_total card1_small'>{data.discharged}</p>
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>
                                <span>OUR</span> Deaths
                            </p>
                            <p className='card_total card1_small'>{data.deaths}</p>
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'>
                                <span>OUR</span> Total Confirmed Case
                            </p>
                            <p className='card_total card1_small'>{data.totalConfirmed}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Covid

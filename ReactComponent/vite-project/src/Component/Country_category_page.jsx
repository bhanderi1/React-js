import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {country_category_data } from '../Product_Data/Action'

const Country_category_page = () => {
    const dispatch = useDispatch()
    const CountryData = useSelector((state)=> state.CountryReducer)
    console.log("Country category data country page",CountryData);
    
    useEffect(()=>{
        dispatch(country_category_data())
    },[])
  return (
    <div>
        <h1>Country category Data</h1>
        <ul className='grid grid-cols-3 '>
            {CountryData.map((item)=>{
                return(
                    <span key={item.id}>
                        <li className='col-span-4'>{item.cat_name} Leades in {item.country_name}</li>
                    </span>
                )
            })}
        </ul>
    </div>
  )
}

export default Country_category_page

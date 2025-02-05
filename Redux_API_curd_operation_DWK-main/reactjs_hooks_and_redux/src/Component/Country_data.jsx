import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { country_data } from '../Product_Data/Action'
import { Link } from 'react-router-dom'

const Country_data = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.CountryReducer)
  console.log("country Page data",data);

  useEffect(() => {
    dispatch(country_data())
  }, [])
  
  return (
    <div>
      <h1>Country Data</h1>
        <ul className='grid grid-cols-3 '>
          {data.map((item,index) => {
            return (
              <span key={item.id} className='flex'>
              <li>{index}.</li>
                {/* <li className='col-span-4'>Business Leads in <Link to={`/country/?country_name=${item.name}`}>{item.name}</Link> </li> */}
                <li className='col-span-4'>Business Leads in  <Link to={`/country/?country_name=${item.name}`}>{item.name}</Link></li>
              </span>
            )
          })}
        </ul>

    </div>
  )
}

export default Country_data

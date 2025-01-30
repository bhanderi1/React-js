import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { country_data } from '../Data/Redux/Action';

const Country_Data = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.country); // Matches state key

  useEffect(() => {
    dispatch(country_data());
  }, [dispatch]);

  return (
    <div>
      <h1>Country Data</h1>
      <ul>
        {countryList && countryList.length > 0 ? (
          countryList.map((country, index) => (
            <li key={index}>{country.name || country}</li>
          ))
        ) : (
          <li>No Data Available</li>
        )}
      </ul>
    </div>
  );
};

export default Country_Data;
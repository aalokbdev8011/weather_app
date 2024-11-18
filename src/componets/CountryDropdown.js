import React from 'react';
import { countries } from 'country-data';

const CountryDropdown = ({ onChange, className, value }) => {
  console.log(countries);
  return (
    <select className={className} onChange={onChange}>
      {Object.keys(countries).map((countryCode) => {
        const country = countries[countryCode];
        if (!country.emoji || !country.alpha2) return null;

        return (
          <option key={country.alpha2} value={country.alpha2}>
            {country.emoji} {country.alpha2}
          </option>
        );
      })}
    </select>
  );
};

export default CountryDropdown;

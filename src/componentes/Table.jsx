import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const comparator = {
  maior(compared, value) { return compared > value; },
  menor(compared, value) { return compared < value; },
  igual(compared, value) { return compared === value; },
};

export default function Table() {
  const {
    planets,
    filterByName,
    filterByNumericValues,
  } = useContext(tableContext);
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    console.log('ok');
    const { name: filteredName } = filterByName;
    setPlanetList(planets
      .filter(({ name }) => (name.includes(filteredName) || !filteredName))
      .filter((planet) => filterByNumericValues
        .every(({ column, comparison, value }) => (
          comparator[comparison.split(' ')[0]](Number(planet[column]), Number(value))))
          || !filterByNumericValues.length));
  }, [filterByName, planets, filterByNumericValues]);

  return (
    <table>
      <TableHeader />
      <tbody>
        { planetList && planetList.map(({
          climate,
          created,
          diameter,
          edited,
          films,
          gravity,
          name,
          orbital_period: orbitalPeriod,
          population,
          rotation_period: rotationPeriod,
          surface_water: surfaceWater,
          terrain,
          url,
        }) => (
          <TableRow
            key={ name }
            climate={ climate }
            created={ created }
            diameter={ diameter }
            edited={ edited }
            films={ films }
            gravity={ gravity }
            name={ name }
            orbitalPeriod={ orbitalPeriod }
            population={ population }
            rotationPeriod={ rotationPeriod }
            surfaceWater={ surfaceWater }
            terrain={ terrain }
            url={ url }
          />
        )) }
      </tbody>
    </table>
  );
}

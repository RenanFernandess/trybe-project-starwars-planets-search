import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default function Table() {
  const { planets, filterByName: { filteredName } } = useContext(tableContext);
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    console.log('ok');
    setPlanetList(planets.filter(({ name }) => name === filteredName || !filteredName));
  }, [filteredName, planets]);

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

import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default function Table() {
  const { planets } = useContext(tableContext);

  return (
    <table>
      <TableHeader />
      <tbody>
        { planets.map(({
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

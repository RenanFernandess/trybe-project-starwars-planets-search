import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import TableRow from './TableRow';

export default function Table() {
  const { planets } = useContext(tableContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
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

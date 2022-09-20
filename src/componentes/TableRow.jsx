import React from 'react';
import propTypes from 'prop-types';

export default function TableRow({
  climate,
  created,
  diameter,
  edited,
  films,
  gravity,
  name,
  orbitalPeriod,
  population,
  rotationPeriod,
  surfaceWater,
  terrain,
  url,
}) {
  return (
    <tr>
      <td>{ name }</td>
      <td>{ rotationPeriod }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surfaceWater }</td>
      <td>{ population }</td>
      <td>{ films.map((film, index) => (<p key={ index }>{film}</p>)) }</td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

TableRow.propTypes = {
  climate: propTypes.string,
  created: propTypes.string,
  diameter: propTypes.string,
  edited: propTypes.string,
  films: propTypes.arrayOf(propTypes.string),
  gravity: propTypes.string,
  name: propTypes.string,
  orbitalPeriod: propTypes.string,
  population: propTypes.string,
  rotationPeriod: propTypes.string,
  surfaceWater: propTypes.string,
  terrain: propTypes.string,
  url: propTypes.string,
}.isRequired;

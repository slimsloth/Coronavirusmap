import React, { useState, useEffect } from 'react';

// table
const CovidTable = () => {
  const [stateData, setData] = useState([]);
  useEffect(() => {
    fetch( 'https://api.caw.sh/v3/covid-19/states' )
      .then(response => response.json())
      .then(setData);
  }, []);

  return (<div>
      <table className="table table-dark">
        <tr>
        <th>State</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
        <th>Population</th>
        </tr>
        {stateData.map((data) => (<tr><td>{data.state}</td><td>{data.active}</td><td>{data.recovered}</td><td>{data.deaths}</td><td>{data.population}</td></tr>))}
      </table>
      </div>

      )

};

export default CovidTable;

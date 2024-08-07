import React, { useEffect } from 'react';

function AllTrains() {


  useEffect(() => {
    // Fetch your train data from an API or a database and set it to 'trains' state
    // Example:
    // fetch('/api/trains')
    //   .then((response) => response.json())
    //   .then((data) => setTrains(data));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Map through 'trains' and display a list of all trains */}
      {/* Example:
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <a href={`/train/${train.id}`}>{train.name}</a>
          </li>
        ))}
      </ul>
      */}
    </div>
  );
}

export default AllTrains;
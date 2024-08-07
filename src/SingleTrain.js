import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleTrain() {
  const { id } = useParams();
  const [train] = useState(null);

  useEffect(() => {
     //Fetch the single train data based on the 'id' parameter
    // Example:
    // fetch(`/api/trains/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setTrain(data));
  }, [id]);

  return (
    <div>
      {train ? (
        <div>
          <h1>{train.name}</h1>
          <p>Departure Time: {train.departureTime}</p>
          <p>Arrival Time: {train.arrivalTime}</p>
          }
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleTrain;

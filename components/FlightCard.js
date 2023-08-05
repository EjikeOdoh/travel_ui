import React from "react";
import "./flightCard.css";

const FlightCard = ({ flight }) => {
  return (
    <div className="flightCard">
      <h3>{flight?.airline}</h3>
      <p>
        Departure: {flight?.departureDate} from {flight.origin}
        <br />
        Arrival: {flight?.arrivalDate} at {flight.destination}
      </p>
      <p>Price: ${flight?.price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default FlightCard;

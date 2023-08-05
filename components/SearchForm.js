import React, { useState } from "react";
import "./searchForm.css";

const SearchForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search action here with the form data
    console.log("Searching flights:", {
      origin,
      destination,
      departureDate,
      returnDate,
    });
  };

  return (
    <div className="searchForm">
      <form
        onSubmit={handleSearch}
        className="max-w-[600px] m-auto grid gap-5 mb-5 p-2"
      >
        <label>
          Origin
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border-2 shadow-lg p-3 rounded-md"
            required
          />
        </label>
        <label>
          Destination
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-2 shadow-lg p-3 rounded-md"
            required
          />
        </label>

        <div className="flex justify-evenly items-center gap-4">
          <label>
            Departure Date
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border-2 shadow-lg p-3 rounded-md"
              required
            />
          </label>
          <label>
            Return Date
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border-2 shadow-lg p-3 rounded-md"
            />
          </label>
        </div>

        <button type="submit">Search </button>
      </form>
    </div>
  );
};

export default SearchForm;

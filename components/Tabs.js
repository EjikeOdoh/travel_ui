import React, { useState } from "react";
import "./searchForm.css";

import {
  MdFlight,
  MdLocalTaxi,
  MdDirectionsBoat,
  MdTrain,
} from "react-icons/md";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="background pt-12">
      <div className="flex justify-evenly items-center">
        <article
          onClick={() => setToggle(1)}
          style={{
            backgroundColor: `${toggle === 1 ? "green" : "white"}`,
            color: `${toggle === 1 ? "white" : "black"}`,
          }}
          className="flex flex-col justify-center items-center p-2 rounded-xl shadow-md min-w-[70px]"
        >
          <MdFlight size={20} />
          <span className="text-[10px] mt-2 font-semibold">Flight</span>
        </article>
        <article
          onClick={() => setToggle(2)}
          style={{
            backgroundColor: `${toggle === 2 ? "green" : "white"}`,
            color: `${toggle === 2 ? "white" : "black"}`,
          }}
          className="flex flex-col justify-center items-center p-2 rounded-xl shadow-md min-w-[70px]"
        >
          <MdTrain size={20} />
          <span className="text-[10px] mt-2 font-semibold">Trains</span>
        </article>
        <article
          onClick={() => setToggle(3)}
          style={{
            backgroundColor: `${toggle === 3 ? "green" : "white"}`,
            color: `${toggle === 3 ? "white" : "black"}`,
          }}
          className="flex flex-col justify-center items-center p-2 rounded-xl shadow-md min-w-[70px]"
        >
          <MdDirectionsBoat size={20} />
          <span className="text-[10px] mt-2 font-semibold">Ship</span>
        </article>
        <article
          onClick={() => setToggle(4)}
          style={{
            backgroundColor: `${toggle === 4 ? "green" : "white"}`,
            color: `${toggle === 4 ? "white" : "black"}`,
          }}
          className="flex flex-col justify-center items-center p-2 rounded-xl shadow-md min-w-[70px]"
        >
          <MdLocalTaxi size={20} />
          <span className="text-[10px] mt-2 font-semibold">Taxi</span>
        </article>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div style={{ display: `${toggle === 1 ? "block" : "none"}` }}>
          <h1 className="text-2xl font-semibold">Find Your Flights!</h1>
        </div>
        <div style={{ display: `${toggle === 2 ? "block" : "none"}` }}>
          <h1 className="text-2xl font-semibold">Catch a Train today</h1>
        </div>
        <div style={{ display: `${toggle === 3 ? "block" : "none"}` }}>
          <h1 className="text-2xl font-semibold">Find the Perfect Boat!</h1>
        </div>
        <div style={{ display: `${toggle === 4 ? "block" : "none"}` }}>
          <h1 className="text-2xl font-semibold">Find a Taxi!</h1>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

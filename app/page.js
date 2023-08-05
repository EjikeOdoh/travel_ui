"use client";

import { slides } from "@/components/pictures";

import Slider from "@/components/Slider";
import Form from "@/components/Form";
import Contact from "@/components/Contact";

import Tabs from "@/components/Tabs";
import SearchForm from "@/components/SearchForm";

const HomePage = ({ repo }) => {
  const flightsData = [
    {
      id: 1,
      airline: "Airline 1",
      departureDate: "2023-08-10",
      arrivalDate: "2023-08-12",
      origin: "City A",
      destination: "City B",
      price: 250,
    },
    {
      id: 2,
      airline: "Airline 2",
      departureDate: "2023-08-11",
      arrivalDate: "2023-08-13",
      origin: "City B",
      destination: "City A",
      price: 300,
    },
    // Add more flight data...
  ];

  return (
    <div>
      <Tabs />
      <SearchForm />
      <Slider data={slides} />
      <Form />
      <Contact />
    </div>
  );
};

export default HomePage;

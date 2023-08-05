import React, { useEffect, useState } from "react";
import { slides } from "./pictures";
import Image from "next/image";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 relative">
      <div className="flex justify-between items-center w-[100%] p-4">
        <p className="font-semibold">Gallery</p>
        <div className="flex gap-2 items-center">
          <BiSkipPreviousCircle
            onClick={prevSlide}
            size={50}
            className={`cursor-pointer hover:scale-150 text-green-600`}
          />
          <BiSkipNextCircle
            onClick={nextSlide}
            size={50}
            className="cursor-pointer hover:scale-150 text-green-600"
          />
        </div>
      </div>

      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000 max-w-[600px]"
                : "opacity-0"
            }
          >
            {current === index && (
              <>
                <p className="text-xs font-bold">{picture.alt}</p>
                <Image
                  src={picture.image}
                  alt={picture.alt}
                  width="100%"
                  className="object-cover"
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

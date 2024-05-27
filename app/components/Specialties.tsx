"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import {cards} from "./data/SpecialyCardData"

export const Specialties = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: true,
  };

  return (
    <>
      <Splide
        className="flex justify-center items-center bg-opacity-0"
        options={options}
        aria-label="My Favorite Images"
      >
        {cards.map((card, index: number) => (
          <SplideSlide
            interval="1500"
            className="flex flex-col lg:flex-row"
            key={index}
          >
              <Image
                src={card.photo}
                alt="Image for Service"
                quality={100}
                className="photo-fill"
              />
            <div className="flex flex-col justify-center items-start text-grey bg-white h-full px-4 py-8 xl:px-16 gap-4 lg:gap-8">
              <h3 className="text-2xl xl:text-3xl">{card.title}</h3>
              <p className="text-lg xl:text-xl">{card.description}</p>
              <div className="flex justify-center lg:justify-start items-center w-full">
                <a
                 href="https://calendly.com/laurapotteraz"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                <button className="text-white bg-skyBlue bg-opacity-75 text:sm xl:text-xl p-2 px-4 xl:p-4 xl:px-8 font-bold hover:bg-opacity-100 ">
                    REQUEST AN APPOINTMENT
                </button>
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

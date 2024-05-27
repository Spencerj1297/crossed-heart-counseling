"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {quotes} from "../components/data/SliderData"

export const Slider = () => {

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: true,
  };

  const smallOptions = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: true,
    width: 350,
  };

  return (
    <>
      <Splide
        className="hidden lg:flex justify-center items-center bg-white p-10"
        options={options}
        aria-label="My Favorite Images"
      >
        {quotes.map((quote, index: number) => (
          <SplideSlide
            interval="1500"
            className="flex flex-col justify-center items-center gap-4"
            key={index}
          >
            <p className="text-center text-2xl text-navy">{quote.quote}</p>
            <p className="text-center text-2xl text-skyBlue">- {quote.client}</p>

          </SplideSlide>
        ))}
      </Splide>
            <Splide
            className="lg:hidden flex justify-center items-center bg-white "
            options={smallOptions}
            aria-label="My Favorite Images"
          >
            {quotes.map((quote, index: number) => (
              <SplideSlide
                interval="1500"
                className="flex flex-col justify-center items-center gap-4 p-4"
                key={index}
              >
                <p className="text-center text-xl text-navy">{quote.quote}</p>
                <p className="text-center text-xl text-skyBlue">- {quote.client}</p>
    
              </SplideSlide>
            ))}
          </Splide>
      </>
  );
};

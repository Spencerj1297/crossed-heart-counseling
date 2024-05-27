import Image from "next/image";
import heart from "../assests/heart.jpg";

export const Intro = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden py-16 lg:py-0">
      <Image
        src={heart}
        alt="Couple creating a heart with hands"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 photo-brightness z-0"
      />
      <div className="h-full flex flex-col lg:justify-center items-center text-center text-white gap-8 lg:gap-16 z-10 relative p-4 lg:p-0">
        <p className="text-6xl lg:text-8xl">
          Welcome To Crossed Hearts Counseling
        </p>
        <p className="text-2xl lg:text-4xl">
          Professional Counseling with a Christian Perspective. Hope, Healing
          and Restoration is found here.
        </p>
        <a
          href="https://calendly.com/laurapotteraz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white bg-skyBlue bg-opacity-75 text-2xl p-4 px-8 mt-32 lg:mt-0 font-bold hover:bg-opacity-100">
            Request An Appointment
          </button>
        </a>
      </div>
    </section>
  );
};

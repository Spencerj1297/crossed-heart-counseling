import Image from "next/image";
import intensive from "../assests/intensive.jpg"
import Link from "next/link";

const Intensives = () => {
  return (
    <>
      <section className="min-h-screen pt-12 lg:pt-28 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-start lg:w-1/2 gap-8 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1 bg-gradient-custom">
          <h2 className="text-6xl">3-Day Intensives</h2>
          <p className="text-xl">
            At Crossed Hearts Counseling, our 3-Day Intensive programs are
            designed to offer a focused jump-start toward healing and
            restoration. Couples will spend three days working one-on-one with
            Laura personally and will come away with a plan to move forward,
            continued support and hope for a better relationship!
          </p>
          <Link href="/intensives/infidelity">
            <button className="text-xl hover:text-grey">
              3-Day Infidelity Intensive
            </button>
          </Link>

          <Link href="/newconstruction">
            <button className="text-xl hover:text-grey">
              3-Day New Construction
            </button>
          </Link>
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
        <div className="flex pt-8 lg:w-1/2 overflow-hidden order-1 lg:order-2">
          <Image
            src={intensive}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
      </section>
    </>
  );
};

export default Intensives;

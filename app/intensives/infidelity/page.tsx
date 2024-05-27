import Image from "next/image";
import infidelity from "../../assests/infidelity.png"
import meeting from "../../assests/meeting.png"

const Infidelity = () => {
  return (
    <>
      <section className="min-h-screen pt-12 lg:pt-28 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-start lg:w-1/2 gap-8 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1 bg-gradient-custom">
          <h2 className="text-6xl">3-Day Infidelity Intensive</h2>
          <p className="text-xl">
            Is your marriage in crisis, following the discovery of your spouse’s
            infidelity and/or pornography use? Do you need skilled, focused and
            experienced care? Have you tried to find help, but nothing seemed to
            fit with your Christian values and beliefs?
          </p>
          <p className="text-3xl">
            A 3-Day Infidelity Intensive May Be The Solution You Are Looking
            For.
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
        <div className="flex pt-8 lg:w-1/2 overflow-hidden order-1 lg:order-2">
          <Image
            src={infidelity}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
      </section>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex lg:w-1/2 overflow-hidden ">
          <Image
            src={meeting}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
        <div className="flex flex-col justify-center items-start lg:w-1/2 gap-8 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1 bg-gradient-custom">
          <p className="text-4xl leading-relaxed">
            The 3-Day Intensive Is A Private, Christian Based Program Where
            Couples Dedicate 3 Days To Working Exclusively On Managing The
            Crisis Of Infidelity, Gain An Understanding Of What Happened And
            Learn The Steps Forward Toward The Healing Process.
          </p>
        </div>
      </section>
    </>
  );
};

export default Infidelity;

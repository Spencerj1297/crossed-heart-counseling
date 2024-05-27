import Image from "next/image";
import servicesIntro from "../assests/servicesintro.png";
import { Specialties } from "../components/Specialties";
import { CommonQuestions } from "../components/CommonQuestions";

const Services = () => {
  return (
    <>
      <section className="min-h-screen pt-12 lg:pt-28 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center lg:w-1/2 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1 bg-gradient-custom">
          <h2 className="text-6xl">Counseling</h2>
          <div className="flex flex-col lg:flex-row py-32 gap-16">
            <div className="flex flex-col gap-8 max-w-80">
              <h3 className="text-3xl">IN-CLINIC SESSIONS</h3>
              <p className="text-xl">
                The counseling relationship is a deeply personal and vulnerable
                process that is best done in-person, one-on-one. The emotional
                issues and struggles that bring someone into counseling require
                a patient, understanding, skilled and experienced counselor to
                help them navigate through the process from hurt to healing. I
                offer in-person sessions with a very flexible schedule.
              </p>
            </div>
            <div className="flex flex-col gap-8 max-w-80">
              <h3 className="text-3xl">REMOTE SESSIONS</h3>
              <p className="text-xl">
                Due to many factors, in-person counseling may not be an option.
                Health, distance, time schedules, etc. can make remote sessions
                the best option for getting the help you need. This is a much
                better option than settling for less-than quality care or no
                care at all. I see many clients remotely and it is highly
                effective.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 overflow-hidden order-1 lg:order-2">
          <Image
            src={servicesIntro}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
      </section>
      <section className="flex flex-col gap-32 justify-center items-center text-navy p-4 lg:p-32">
        <h3 className="text-center text-grey text-5xl">Services Provided</h3>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="flex flex-col gap-8 max-w-[400px]">
            <h4 className="text-3xl">Individual Counseling</h4>
            <p className="text-xl">
              Individual counseling is a focused one-on-one process. You and I
              will spend the time and attention necessary to help move you
              through the issues and struggles you are facing toward the healthy
              results you are seeking.
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-[400px]">
            <h4 className="text-3xl">Couple’s Counseling</h4>
            <p className="text-xl">
              Couple’s counseling is a unique and dynamic process. Balancing
              each persons needs while fully engaging both in the session can be
              challenging and not for the inexperienced counselor. Over the
              years, I have worked with hundreds of couples and have the
              patience, insight, mediation skill and therapeutic knowledge to
              help you too.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 lg:gap-32 bg-gradient-custom min-h-screen p-4 lg:p-32">
        <h3 className="text-center text-grey text-5xl">
          Treatment Specialties
        </h3>
        <Specialties />
      </section>
      <section className="min-h-96 bg-skyBlue bg-opacity-50 flex flex-col gap-16 lg:gap-32 px-4 py-16 lg:p-32">
        <h3 className="text-grey text-5xl text-center lg:text-left">
          Common Questions
        </h3>
        <CommonQuestions />
      </section>
    </>
  );
};

export default Services;

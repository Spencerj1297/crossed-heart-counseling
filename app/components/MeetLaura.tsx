import Image from "next/image";
import client from "../assests/clientPortrait.png";
import Link from "next/link";

export const MeetLaura = () => {
  return (
    <section className="flex flex-col lg:flex-row z-10 min-h-screen w-full p-4 lg:p-32 bg-opacity-20">
      <div className="lg:w-2/5 h-full">
        <Image src={client} alt="Photo of Laura Potter" quality={100}  className=""/>
      </div>
      <div className="flex flex-col gap-2 lg:gap-8 lg:w-3/5 h-full justify-center items-start text-skyBlue">
        <h2 className="text-skyBlue text-2xl lg:text-5xl">
          Meet Laura Potter, M.C., L.C.P.C. Licensed Clinical Pastoral Counselor
          In Phoenix, Arizona.
        </h2>
        <p className="lg:text-3xl text-black">
          Laura Potter is the founder of Crossed Hearts Counseling and has been
          in the field of professional counseling for over 20 years. Laura has
          helped hundreds of individuals and couples walk through the crisis and
          fall-out caused by infidelity; offering hope and healing. Restoring
          relationships with evidenced based counseling interventions along with
          sound Biblical principals and truth; Laura can help you too. No matter
          where you are today, there is always hope!
        </p>
        <p className="lg:text-3xl text-black">It's His Promise;</p>
        <p className="lg:text-3xl text-black italic">
          “And the God of all grace who called you to His eternal glory in
          Christ, after you have suffered a little while, will Himself restore
          you and make you strong, firm and steadfast.” <br></br>- 1 Peter 5:10
        </p>
        <Link href="/about">
        <button className="underline lg:text-2xl">
            Learn More
        </button>
        </Link>
      </div>
    </section>
  );
};

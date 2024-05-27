import Image from "next/image";
import client from "../assests/clientPortrait2.png";

const About = () => {
  const credentials = [
    {
      header: "Licenses & Certifications",
      bulletOne: "Licensed Clinical Pastoral Counselor",
      bulletTwo: "Certification in Christian Counseling",
      bulletThree: "Certification in Sexual Betrayal, Deception and Trauma",
    },
    {
      header: "Education Background",
      bulletOne: "Bachelor of Science Degree, Psychology",
      bulletTwo: "Master’s Degree, Counseling",
      bulletThree: "Post-Masters Certification, Christian Counseling",
    },
    {
      header: "Professional Affiliations",
      bulletOne:
        "Professional Clinical Member of the National Christian Counselors Association",
      bulletTwo: "Member of the American Association of Christian Counselors",
      bulletThree: "Ordained Minister, United Faith Christian Ministries",
    },
  ];

  return (
    <>
      <section className="min-h-screen pt-12 lg:py-36 flex flex-col lg:flex-row bg-gradient-custom">
        <div className="flex flex-col gap-6 lg:w-1/2 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1">
          <h2 className="text-4xl lg:text-6xl">Laura Potter M.C., L.C.P.C.</h2>
          <h3 className="text-xl lg:text-2xl">
            FOUNDER, LICENSED CLINICAL PASTORAL COUNSELOR
          </h3>
          <p className="text-xl">
            The journey forward once you discover your partner has been
            unfaithful is painfully challenging. The process can be much easier
            when you are joined by an experienced counselor. Someone who has
            been where you are and has the unique skills, understanding and
            insight to help you heal and restore yourself and your relationship.
            <br />
            <br />
            Hi, I’m Laura. I founded Crossed Hearts Counseling several years ago
            with the sole purpose of helping individuals and couples just like
            you weather the storm of infidelity, sex addiction and broken
            relationships. Even though I had been in the counseling field for
            many years, when I faced infidelity in my own marriage, help was
            hard to find and sadly inadequate. After some time of healing and
            with God’s direction, I was lead to turn what was my darkest season
            into a guiding light for others.
            <br />
            <br />
            Laura is trained as a Licensed Professional Counselor with
            post-graduate education and training as a Licensed Clinical Pastoral
            Counselor. Laura’s unique insight and understanding of what it takes
            to survive and thrive infidelity is what sets her apart. Having
            walked this journey before, she is quick to get to the root causes
            and structure the healing process necessary to restore and help
            build a new and stronger relationship. Her unique perspective is
            something that can’t be taught; it comes from personal experience
            and her reliance on God’s Word and wisdom.
            <br />
            <br />
            Laura works with both men and women singles and couples struggling
            with sex addiction, pornography and infidelity. Expert and
            compassionate guidance will help move you toward hope, healing and
            restoration.
          </p>
        </div>
        <div className="lg:w-1/2 overflow-hidden order-1 lg:order-2">
          <Image
            src={client}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
      </section>
      <section className="flex flex-col gap-32 justify-center items-center p-32">
        <h3 className="text-center text-grey text-5xl">
          Professional Credentials
        </h3>
        <div className="text-navy flex flex-col lg:flex-row justify-center items-start gap-16">
          {credentials.map((cred, ind) => (
            <div key={ind} className="flex flex-col gap-8 items-center max-w-96">
              <h4 className="text-3xl">{cred.header}</h4>
              <ul className="flex flex-col list-disc pl-8 items-start gap-4">
                <li className="text-xl">{cred.bulletOne}</li>
                <li className="text-xl">{cred.bulletTwo}</li>
                <li className="text-xl">{cred.bulletThree}</li>
              </ul>
            </div>
          ))}
        </div>

        <div></div>
      </section>
    </>
  );
};

export default About;

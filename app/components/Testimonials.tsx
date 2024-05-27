import { Slider } from "./Slider";

export const Testimonials = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen w-full bg-gradient-custom">
      <div className="flex flex-col gap-8 lg:w-1/2 p-4 lg:p-32">
        <h2 className="text-2xl lg:text-5xl text-grey">
          Are You Facing A Crisis In Your Life? <br />In Your Relationship? <br />Let's Work
          Together.
        </h2>
        <p className="text-2xl lg:text-2xl text-grey">I help my clients…</p>
        <ul className="flex flex-col list-disc text-navy pl-8 text-2xl gap-6">
          <li>
            Manage through the crisis of infidelity or sex addiction in their
            relationship.
          </li>
          <li>
            Overcome the struggles and brokenness due to sex addiction and/or
            pornography addiction.
          </li>
          <li>
            Navigate the healing and restoration process for the partner of an
            unfaithful spouse..
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 lg:w-1/2 p-8">
        <h2 className="text-2xl lg:text-5xl text-grey text-center">
          What Laura's Clients Are Saying
        </h2>
        <Slider />
      </div>
    </section>
  );
};

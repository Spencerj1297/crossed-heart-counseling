import Image from "next/image";
import resources from "../assests/resources.png";
import { Articles } from "../components/Articles";
import { books, forms } from "../components/data/ResourceData";

const Resources = () => {
  return (
    <>
      <section className="min-h-screen pt-12 lg:pt-28 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center lg:w-1/2 text-navy lg:px-28 py-6 px-4 order-2 lg:order-1 bg-gradient-custom">
          <h2 className="text-6xl">Resources</h2>
        </div>
        <div className="lg:w-1/2 overflow-hidden order-1 lg:order-2">
          <Image
            src={resources}
            alt="Photo of Laura Potter"
            quality={100}
            className="photo-fill"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center gap-16 text-navy p-4 lg:p-32">
        <div className="flex flex-col gap-16 lg:w-1/2">
          <h3 className="text-grey text-5xl">Recommended Books</h3>

          <ul className="flex flex-col gap-6">
            {books.map((book, ind) => (
              <a
                key={ind}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-xl hover:text-grey">{book.title}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-16 lg:w-1/2">
          <h3 className="text-grey text-5xl">New Client Forms</h3>
          <ul className="flex flex-col gap-6">
            {forms.map((form, ind) => (
              <a
                key={ind}
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-xl hover:text-grey">{form.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <Articles />
      </section>
    </>
  );
};

export default Resources;

export const Articles = () => {
  const articles = [1, 2, 3];

  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-16 p-4 lg:p-0">
      <h2 className="text-grey text-5xl">Featured Articles</h2>
      <div className="flex flex-col lg:flex-row gap-16">
        {articles.map((article, ind) => (
          <div
            key={ind}
            className="flex flex-col h-[500px] w-full lg:w-[500px] transition duration-300 transform hover:scale-105 cursor-pointer shadow-custom text-grey"
          >
            <div className="h-4/6">
              <p>FUTURE IMAGE</p>
            </div>
            <div className="h-2/6 border-t border-navy">
              <p>FUTURE TITLE</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

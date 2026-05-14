import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-2 md:rounded-2xl lg:p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="w-full md:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col items-center justify-center md:block">
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-5 md:mb-10">
            Books to Freshen Up Your Bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white border-0">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

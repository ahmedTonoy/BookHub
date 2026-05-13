import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-10">
            Books to Freshen Up Your Bookshelf
          </h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

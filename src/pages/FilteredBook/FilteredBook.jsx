import { BookOpen, CalendarFold, Users } from "lucide-react";
import { Link } from "react-router";

const FilteredBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 md:gap-8 my-5 md:my-8 border border-[#13131326] rounded-2xl p-5">
      <div className="bg-[#f3f3f3] rounded-2xl p-5 flex items-center justify-center">
        <img
          className="mx-auto min-h-40 max-h-50 shadow-2xl"
          src={image}
          alt={`Image of book titled ${bookName}`}
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl md:text-4xl">{bookName}</h1>
        <p className="text-xl font-medium my-2">By : {author}</p>
        <div className="my-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div>
            <span className="font-bold mr-1">Tag </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline p-4 rounded-full bg-[#23be0a0d] font-bold border-0 text-[#23BE0A]"
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="md:ml-2 flex gap-2">
            <CalendarFold /> Year of Publishing:{" "}
            <p className="font-medium">{yearOfPublishing}</p>
          </div>
        </div>
        <div className="my-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex gap-2">
            <Users />
            <p>
              Publisher: <span className="font-medium">{publisher}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <BookOpen />
            <p>
              Number of Pages: <span className="font-medium">{totalPages}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between md:justify-start items-center gap-3 md:gap-6 pt-3 md:pt-5 border-t border-t-[#13131326] text-[#131313b3]">
          <p className="badge badge-outline p-6 rounded-full bg-[#328eff1a] text-lg border-0 text-[#328EFF]">
            <span className="hidden md:block">Category:</span>{" "}
            <span className="font-medium">{category}</span>
          </p>
          <p className="badge badge-outline p-6 rounded-full bg-[#ffac331a] text-lg border-0 text-[#ffac33]">
            Rating: <span className="font-medium">{rating}</span>
          </p>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn hidden md:block rounded-full font-medium text-lg p-6 bg-[#23BE0A] text-white border-0">
              View Details
            </button>
          </Link>
        </div>
        <Link to={`/bookDetails/${bookId}`}>
          <button className="btn md:hidden mt-4 w-full md:w-fit rounded-full font-medium text-lg p-6 bg-[#23BE0A] text-white border-0">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilteredBook;

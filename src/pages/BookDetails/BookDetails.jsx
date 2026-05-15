import { useLoaderData, useParams } from "react-router";
import { setLsData } from "../../utils/addToLs";

const BookDetails = () => {
  const bookList = useLoaderData();
  const { id } = useParams();
  const bookId = parseInt(id);
  const targetBook = bookList.find((book) => book.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = targetBook;

  const handleAddToList = (bookId, bookName, listName) => {
    setLsData(bookId, bookName, listName);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-5 md:my-8">
      <div className="bg-[#f3f3f3] md:rounded-2xl p-10 md:p-20 flex items-center justify-center">
        <img
          className="mx-auto min-h-75 max-h-130 shadow-2xl"
          src={image}
          alt={`Image of book titled ${bookName}`}
        />
      </div>
      <div className="px-4 md:px-0">
        <h1 className="font-bold text-4xl">{bookName}</h1>
        <p className="text-xl font-medium my-2">By : {author}</p>
        <h2 className="text-xl font-medium py-2 my-4 border-y border-y-[#13131326]">
          {category}
        </h2>
        <p className="text-justify">
          <span className="font-bold">Review : </span>
          <span className="text-[#131313b3]">{review}</span>
        </p>
        <div className="my-5 flex items-center gap-3">
          <span className="font-bold mr-1">Tag </span>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline bg-[#23be0a0d] font-bold border-0 text-[#23BE0A]"
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="flex gap-6 py-5 border-t border-t-[#13131326] text-[#131313b3]">
          <div className="flex flex-col gap-2">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex mt-3 gap-4 justify-center md:justify-start">
          <button
            onClick={() => handleAddToList(bookId, bookName, "read")}
            className="btn btn-soft"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleAddToList(bookId, bookName, "wish")}
            className="btn text-white bg-[#50b1c9]"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

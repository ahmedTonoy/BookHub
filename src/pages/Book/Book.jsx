import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-white border border-[#13131326] shadow-sm">
        <figure className="p-3">
          <img
            className="w-full rounded-xl h-110"
            src={image}
            alt={`Image of book titled ${bookName}`}
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start mb-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline bg-[#23be0a0d] font-bold border-0 text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="font-bold mb-3">By : {author}</p>
          <div className="flex justify-between items-end">
            <p>{category}</p>
            <div className="flex gap-3 items-end">
              <span>{rating}</span>
              <span>
                <Star className=""></Star>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

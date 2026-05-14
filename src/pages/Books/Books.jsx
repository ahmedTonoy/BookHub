import Book from "../Book/Book";

const Books = ({ booksData }) => {
  console.log(Array.isArray(booksData));
  console.log("Type of booksData: ", typeof booksData);
  console.log(booksData);
  return (
    <div className="my-10 md:my-15 px-3 md:px-0">
      <h1 className="text-center font-bold text-4xl mb-4 md:mb-8">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

import FilteredBook from "../FilteredBook/FilteredBook";

const FilteredBooks = ({ list }) => {
  return (
    <div className="px-2 md:px-0">
      {list.map((book) => (
        <FilteredBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default FilteredBooks;

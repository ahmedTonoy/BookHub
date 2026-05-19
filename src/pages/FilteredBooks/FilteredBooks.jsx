import FilteredBook from "../FilteredBook/FilteredBook";

const FilteredBooks = ({ list }) => {
  return (
    <div>
      {list.length === 0 && (
        <h1 className="text-center font-medium text-xl my-4">
          No items yet to show, add some first
        </h1>
      )}
      <div className="px-2 md:px-0">
        {list.map((book) => (
          <FilteredBook key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FilteredBooks;

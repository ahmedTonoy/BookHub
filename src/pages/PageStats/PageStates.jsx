import { useLoaderData } from "react-router";
import CustomizeBarShapes from "../../components/CustomizeBarShapes/CustomizeBarShapes";

const PageStates = () => {
  const booksList = useLoaderData();
  const booksStatsData = booksList.map((book, index, array) => ({
    name:
      book.bookName.length > 10
        ? book.bookName.slice(0, 10) + "..."
        : book.bookName,
    fullName: book.bookName,
    pages: book.totalPages,
    color: `hsl(${(index * 360) / array.length}, 70%, 50%)`,
  }));
  return (
    <div className="bg-[#f3f3f3] mt-2 p-10 md:rounded-2xl flex justify-center items-center mb-20">
      <CustomizeBarShapes data={booksStatsData}></CustomizeBarShapes>
    </div>
  );
};

export default PageStates;

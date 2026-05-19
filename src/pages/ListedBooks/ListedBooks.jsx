import { ChevronDown } from "lucide-react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLsData } from "../../utils/addToLs";
import FilteredBooks from "../FilteredBooks/FilteredBooks";
import { useState } from "react";

const SORT_FIELDS = {
  RATING: "rating",
  PAGES: "totalPages",
  YEAR: "yearOfPublishing",
};

const ListedBooks = () => {
  const allBooksList = useLoaderData();
  const wishIds = getLsData("wish");
  const readIds = getLsData("read");

  const [sortField, setSortField] = useState("");

  const wishBooksList = allBooksList.filter((book) =>
    wishIds.includes(book.bookId),
  );
  const readBooksList = allBooksList.filter((book) =>
    readIds.includes(book.bookId),
  );

  if (sortField) {
    wishBooksList.sort((a, b) => a[sortField] - b[sortField]);
    readBooksList.sort((a, b) => a[sortField] - b[sortField]);
  }
  return (
    <div>
      <h1 className="bg-[#f3f3f3] py-8 rounded-2xl text-2xl font-bold flex items-center justify-center mt-2">
        Books
      </h1>
      <div className="mt-8 mb-10 flex justify-center">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-md border-none border-0 bg-[#23BE0A] px-5 text-white font-semibold"
          >
            Sort By <ChevronDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-[#f3f3f3] rounded-box w-full p-1 shadow-sm"
          >
            <li>
              <button
                onClick={() => setSortField(SORT_FIELDS.RATING)}
                className="flex justify-center"
              >
                Rating
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortField(SORT_FIELDS.PAGES)}
                className="flex justify-center"
              >
                No. of Pages
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortField(SORT_FIELDS.YEAR)}
                className="flex justify-center"
              >
                Publish Year
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortField("")}
                className="flex justify-center"
              >
                Clear Sorting
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <FilteredBooks list={readBooksList} />
          </TabPanel>
          <TabPanel>
            <FilteredBooks list={wishBooksList} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;

import { ChevronDown } from "lucide-react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLsData } from "../../utils/addToLs";
import FilteredBooks from "../FilteredBooks/FilteredBooks";

const ListedBooks = () => {
  const allBooksList = useLoaderData();
  const wishIds = getLsData("wish");
  const readIds = getLsData("read");
  const wishBooksList = allBooksList.filter((book) =>
    wishIds.includes(book.bookId),
  );
  const readBooksList = allBooksList.filter((book) =>
    readIds.includes(book.bookId),
  );
  return (
    <div>
      <h1 className="bg-[#f3f3f3] py-8 text-2xl font-bold flex items-center justify-center mt-2">
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
              <a className="flex justify-center">Rating</a>
            </li>
            <li>
              <a className="flex justify-center">No. of Pages</a>
            </li>
            <li>
              <a className="flex justify-center">Publish Year</a>
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

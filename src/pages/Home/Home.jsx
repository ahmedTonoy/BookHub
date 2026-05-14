import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  const booksData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Books booksData={booksData}></Books>
    </div>
  );
};

export default Home;

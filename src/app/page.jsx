import BookList from "../components/BookList";

const books = [
  {
    title: "Domain Driven Design",
    converImg:
      "https://m.media-amazon.com/images/I/61aFldsgAmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    finished: true,
  },
  {
    title: "Clean Code",
    converImg:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    finished: false,
  },
]

const HomePage = () => {
  return (
    <>
      <BookList books={books}/>
    </>
  );
};

export default HomePage;

"use client"

// 💡 book contains title: string, coverImg: string, finished: boolean
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

const BookList = () => {
  return (
    <div className="bookList">
      {books.map((book) => (
        <div className="book">
          <div className="book-thumbnail">
            <img src={book.converImg} alt="book cover" />
          </div>
          <p className="text-title">{book.title}</p>
          {book.finished ? <span className="readingStatus">finished</span> : ""}
        </div>
      ))}
    </div>
  )
}

export default BookList

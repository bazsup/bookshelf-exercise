// Write component name Quiz4 and display your name
const book = {
  text: "Clean Code",
  price: 10,
};
const Quiz4 = () => {
  return (
    <>
      Quiz 4<Child book={book} />
    </>
  );
};

//destructuring
const Child = ({ book }) => {
  return (
    <ul>
      <li>Book: {book.text}</li>
      <li>Price: ${book.price}</li>
      <li>Include VAT ${book.price + 1}</li>
    </ul>
  );
};

export default Quiz4;

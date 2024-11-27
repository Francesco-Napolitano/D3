import SingleBook from "./SingleBook";

const BookList = ({ ArrayLibri }) => {
   return (
      <>
         {ArrayLibri.map((book) => (
            <SingleBook
               key={book.asin}
               book={book}
            />
         ))}
      </>
   );
};

export default BookList;


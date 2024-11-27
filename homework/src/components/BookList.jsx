import SingleBook from "./SingleBook";

const BookList = ({ ArrayLibri }) => { // Destruttura l'array passato come prop
   return (
      <>
         {ArrayLibri.map((book) => (
            <SingleBook
               key={book.asin} // Usa una chiave unica
               book={book}     // Passa il singolo libro come prop
            />
         ))}
      </>
   );
};

export default BookList;

import { Card, Button } from 'react-bootstrap';

const SingleBook = ({ book }) => { 
   return (
      <section style={{ display: 'flex', justifyContent: 'center' }}>
         <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img
               style={{ height: '28em', objectFit: 'cover' }}
               variant="top"
               src={book.img} 
            />
            <Card.Body>
               <Card.Title>{book.title}</Card.Title> 
               <Card.Text>{book.category}</Card.Text>
               <Button variant="primary">Acquista a: {book.price}€</Button>
            </Card.Body>
         </Card>
      </section>
   );
};

export default SingleBook;

import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        getBooks();
    },[]);

    const getBooks = async() =>{
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data);
    }

    const deleteBook = async(bookId) => {
        try {
            await axios.delete(`http://localhost:5000/books/${bookId}`);
            getBooks();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="container mt-5">
        <Link to="/add" className='button is-success mb-3'>Add New</Link>
        <div className="columns is-multiline">
            {books.map((book)=>(
                <div className="column is-one-quarter" key={book.id}>
                    <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by5">
                        <img src={book.url} alt={book.id} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{book.name}</p>
                        </div>
                        </div>
                    </div>
                    <footer className='card-footer'>
                        <Link to={`edit/${book.id}`} className='card-footer-item'>Edit</Link>
                        <a onClick={()=> deleteBook(book.id)} className='card-footer-item'>Delete</a>
                    </footer>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BookList
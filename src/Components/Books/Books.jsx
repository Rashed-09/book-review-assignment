import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
//  className="card bg-base-100 w-96 shadow-xl"

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="font-bold text-3xl text-white">Books</h2>
            <div className="grid grid-cols-3 gap-4 space-y-16 space-x-10">
            {
                books.map((book, idx) => <NavLink to={`/job_details/${book.bookId}`} className="card bg-base-100 w-96 shadow-xl" key={idx}>
                    <figure>
                            <img src={'/src/assets/img/to Kill.jpg'} alt="book" />
                        </figure>  
                        <div className="card-body">
                            <div className="flex gap-3 text-green-500">
                                <p>#{book.tags[0]}</p>
                                <p>#{book.tags[1]}</p>
                                <p>#{book.tags[2]}</p>
                            </div>
                            <h2>{book.bookName}</h2>
                            <p>By: {book.author}</p>
                            <div className="flex">
                                <p>{book.category}</p>
                                <div className="flex items-center gap-2">
                                    <p>{book.rating}</p>
                                    <CiStar />
                                </div>
                            </div>
                        </div>
                </NavLink>)
            }
            </div>
        </div>
    );
};

export default Books;
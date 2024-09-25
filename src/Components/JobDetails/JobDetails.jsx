import { useLoaderData, useParams } from "react-router-dom";
import { getStoredIdForRead, saveToLoaclStorageReadId } from "../../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLoaclStorageWishId } from "../../Utility/storageWish";

const JobDetails = () => {
    const books = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const {bookName, author, category, review, totalPages, publisher, yearOfPublishing, rating, bookId} = book;


    const ReadButtonclicked = () => {
        saveToLoaclStorageReadId(idInt)
        toast("Read Successfully")
    }

    const WishListButtonClicked = bookID => {
        const readBooks = getStoredIdForRead()
        const exists = readBooks.find(id => id === bookID)
        if(exists) {
            toast("Book Alrady Read  !!!")
        }
        else if(!exists) {
            saveToLoaclStorageWishId(idInt)
            toast('Successfully Added')
        }
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <hr />
                <h3>{category}</h3>
                <hr />
                <p>Review: {review}</p>
                <div className="flex items-center text-green-500 gap-3">
                    <span>#{book.tags[0]}</span>
                    <span>#{book.tags[1]}</span>
                </div>
                <hr />
                <div>
                    <p>Number Of Page:    {totalPages}</p>
                    <h3>Publisher:    {publisher}</h3>
                    <p>Year Of Publishing:    {yearOfPublishing}</p>
                    <p>Rating:    {rating}</p>
                </div>
                <div className="card-actions">
                <button onClick={ReadButtonclicked} className="btn btn-primary bg-transparent text-white">Read</button>
                <button onClick={() => WishListButtonClicked(bookId)} className="btn btn-primary bg-cyan-700 text-white">WishList</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
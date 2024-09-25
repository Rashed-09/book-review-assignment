import { useEffect, useState } from "react";
import { getStoredIdForRead } from "../../Utility/localStorage";
import { getStoredIdForWishList } from "../../Utility/storageWish";
import CartBook from "../CartBook/CartBook";

const ListedBooks = () => {
    const [display, setDisplay] = useState([])
    const [allBook, setAllBook] = useState([])
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setAllBook(data))
    },[])


    const filtering = filter => {
        const readItem = getStoredIdForRead()
        const wishItem = getStoredIdForWishList()
        const all = [...readItem, ...wishItem]
        // console.log(readItem, wishItem, all)
        
        if(filter === 'all'){
            const books = allBook.filter(book => all.includes(book.bookId))
            setDisplay(books)
            
        }
        else if(filter === 'read') {
            const readBook = allBook.filter(book => readItem.includes(book.bookId))
            setDisplay(readBook)
        }
        else if(filter === 'wishList') {
            const wishListBook = allBook.filter(book => wishItem.includes(book.bookId))
            setDisplay(wishListBook)
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center py-10 bg-gray-400 rounded">
                <h3 className="text-center text-black font-extrabold text-4xl">Books</h3>
            </div>

            <div className="flex justify-center items-center mt-10">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-success text-xl text-white font-bold">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white">
                        <li><a>Rating</a></li>
                        <li><a>Number of Page</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-3 mt-10 justify-center">
                <button onClick={() => filtering('all')} className="btn px-8 text-white bg-transparent">All</button>
                <button onClick={() => filtering('read')} className="btn px-8 text-white btn-success">Read</button>
                <button onClick={() => filtering('wishList')} className="btn px-8 text-white bg-cyan-700">WishList</button>
            </div>

            <div className="mt-16">
                {
                    display.map((cart, idx) => <CartBook key={idx} cart={cart}></CartBook>)
                }
            </div>

        </div>
    );
};

export default ListedBooks;
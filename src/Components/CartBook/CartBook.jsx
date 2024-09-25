import PropTypes from 'prop-types'
const CartBook = ({cart}) => {
    const {bookName, author, tags, yearOfPublishing, publisher,totalPages, category, rating} = cart;
    return (
        <div className="card card-side bg-gray-300 text-black shadow-xl my-8">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By:  {author}</p>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 text-green-500">
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    </div>
                    <p>Year of Publishing:  {yearOfPublishing}</p>
                </div>
                <div className="flex items-center gap-3">
                    <h2>Publisher:  {publisher}</h2>
                    <p>Page: {totalPages}</p>
                </div>
                <div className="flex items-center gap-3">
                    <h3>Category: {category}</h3>
                    <p>Rating:  {rating}</p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

CartBook.propTypes ={
    cart: PropTypes.object
}
export default CartBook;
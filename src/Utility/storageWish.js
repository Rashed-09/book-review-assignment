const getStoredIdForWishList = () => {
    const readBooks = localStorage.getItem('wishList_books')
    if(readBooks){
        return JSON.parse(readBooks)
    }
    return []
}

const saveToLoaclStorageWishId = id => {
    const storedBooksId = getStoredIdForWishList()
    const exists = storedBooksId.find(bookId => bookId === id)
    if(!exists) {
        storedBooksId.push(id)
        localStorage.setItem('wishList_books', JSON.stringify(storedBooksId))
    }
}



export { getStoredIdForWishList, saveToLoaclStorageWishId }
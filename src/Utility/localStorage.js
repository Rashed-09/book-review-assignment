const getStoredIdForRead = () => {
    const readBooks = localStorage.getItem('read_books')
    if(readBooks){
        return JSON.parse(readBooks)
    }
    return []
}

const saveToLoaclStorageReadId = id => {
    const storedBooksId = getStoredIdForRead()
    const exists = storedBooksId.find(bookId => bookId === id)
    if(!exists) {
        storedBooksId.push(id)
        localStorage.setItem('read_books', JSON.stringify(storedBooksId))
    }
}



export { saveToLoaclStorageReadId, getStoredIdForRead }
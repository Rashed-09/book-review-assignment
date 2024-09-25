
const allInOneArray = () => {
    const allList = [];
    const read = localStorage.getItem('read_books')
    const wish = localStorage.getItem('wishList_books')
    for(const readId of read) {
        const wishId = wish.filter(wishList => wishList === readId)
        const notSame = wish.filter(wishList => wishList !== readId)
        allList.push(wishId)
        allList.push(notSame)
    }
    return allList
}


export {allInOneArray}
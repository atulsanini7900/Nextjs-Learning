'use client'

const BookList = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h1>Total book List</h1>

            <div>{params.booklist.map((data,index) => {
                return (
                    <div key={index}>The book List is: {data}</div>
                )
            })}</div>

        </div>
    )
}

export default BookList
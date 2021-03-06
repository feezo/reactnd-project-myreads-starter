import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
             props.books.filter( book => book.shelf ===
                "currentlyReading"
              ).map( book => (
                <li key={book.id}>
                  <Book
                   book={book}
                   moveShelf={props.moveShelf}
                   currentShelf="currentlyReading"/>
                </li>
              ))
            }
          </ol>
        </div>

       <h2 className="bookshelf-title">Want to Read</h2>
       <div className="bookshelf-books">
          <ol className="books-grid">
            {
              props.books.filter( book => book.shelf ===
                "wantToRead"
              ).map( book => (
                <li key={book.id}>
                <Book
                book={book}
                moveShelf={props.moveShelf}
                currentShelf="wantToRead"/>
                </li>
              ))
            }
            </ol>
        </div>

        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {
                props.books.filter( book => book.shelf ===
                  "read"
                ).map( book => (
                  <li key={book.id}>
                  <Book
                  book={book}
                  moveShelf={props.moveShelf}
                  currentShelf="read"/>
                  </li>
                ))
              }
          </ol>
       </div>

    </div>
          )

      }

  export default BookShelf

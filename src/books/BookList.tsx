import Book from "./Book";
import data from "./data.json"
import MenuTitle from "../components/MenuTitle";

import { useState } from "react"


const { items } = data

const tempAuthors = items.map((item) => {
  return item.volumeInfo.authors
})

const tempSet = new Set(tempAuthors.flat())
console.log(tempSet)
const allAuthors = ["All", ...tempSet]


const BookList = () => {

  const title = "Best Books :D"
  const [authors, setAuthors] = useState(allAuthors)
  const [author, setAuthor] = useState(["All"])

  const filterAuthor = (author: string) => {
    const newItems = allAuthors.filter((item) => {
      return item === author
    })
    console.log(newItems)
    setAuthor(newItems)
  }


  return (
    <section className="main">
      <MenuTitle title={title} />
      {authors.map((author) => {
        return (
          <button
            key={author}
            className="menu-btn"
            onClick={() => {
              filterAuthor(author)
            }}
          >
            {author}
          </button>
        )
      })}

      <div className="booklist">
        {items.map((item) => {
          const { volumeInfo } = item
          if (author[0].length == 1 || author[0] == "All") {
            return <Book {...volumeInfo} key={item.id} />
          } else {
            if (volumeInfo.authors.includes(author[0])) {
              return <Book {...volumeInfo} key={item.id} />
            }
          }
        })}
      </div>
    </section>
  );
};

export default BookList;
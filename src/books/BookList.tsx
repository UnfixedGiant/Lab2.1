import Book from "./Book";
import data from "./data.json"


const { items } = data

const BookList = () => {
  return (
    <section className="main">
      <div className="booklist">
        {items.map((item) => {
          const { volumeInfo } = item
          return <Book {...volumeInfo} key={item.id} />
        })}
      </div>
    </section>
  );
};

export default BookList;
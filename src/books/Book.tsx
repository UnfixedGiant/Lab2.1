import Title from "./Title"
import Image from "./Image"
import Author from "./Author"

import type { VolumeInfo } from "./BookProps"


const Book: React.FC<VolumeInfo> = (props: VolumeInfo) => {
    const { title, authors, imageLinks } = props;
    console.log(title)
    return (
        <article className="book" >
            <Image src={imageLinks?.thumbnail} alt={authors[0]} />
            <Title title={title} />
            {authors.map(author => {
                return <Author name={author} />
            })}

        </article >
    )
}


export default Book
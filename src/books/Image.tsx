
const defaultSrc = "https://books.google.com/books/content?id=S85NCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"


const Image = ({ src = defaultSrc, alt }: { src?: string, alt: string }) => {
    return (
        <img src={src} alt={alt} />
    )
}

export default Image
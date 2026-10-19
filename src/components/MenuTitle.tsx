
const defaultTitle = "Books Menu"



const MenuTitle = ({ title }: { title?: string }) => {
    return (
        <div>
            <h2>{title ? title : defaultTitle} </h2>
        </div>
    )
}

export default MenuTitle
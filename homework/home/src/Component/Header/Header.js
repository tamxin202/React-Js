import "./Header.css"
const Header = (props) => {
    return (
        <>
            <div class = "header">
                <img src = {props.link_image}/>
                <h1>This is header</h1>
            </div>

        </>
    )
}
export default Header;
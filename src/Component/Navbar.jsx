import searchIcon from '../assets/search.svg'
import Searchbar from './miniComponents/Searchbar';

function Navbar() {
    return (
        <>
            <div id='navbar'>
                <Searchbar />
                <nav id='upperNav'>
                    <ul>
                        <li><a href="">Categories</a></li>
                        <li><a href="">Website Builders</a></li>
                        <li><a href="">Today's deals</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navbar;
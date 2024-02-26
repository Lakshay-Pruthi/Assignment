import searchIcon from '../../assets/search.svg'

function Searchbar() {
    return (
        <>
            <div id='searchbarContainer'>
                <img id='searchIcon' src={searchIcon} alt="" />
                <input type="search" name="searchbar" id="searchbar" />
            </div>
        </>
    )
}
export default Searchbar;
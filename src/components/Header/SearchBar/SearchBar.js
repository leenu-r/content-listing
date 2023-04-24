import "./SearchBar.css";
import {IMAGES} from '../../../constants'

export const openSearchModal = (event) => {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
};

const closeSearchModal = (event) => {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
};

const SearchBar = (props) => {
  const { searchTerm, handleSearch } = props;

  return (
    <>
      <div data-testid="search-bar" id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closeSearchModal}>
            &times;
          </span>
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <button data-testid="search-icon" onClick={openSearchModal}>
        <img className="search-icon" src={IMAGES.SEARCH_ICON_IMAGE} alt="Search" />
      </button>
    </>
  );
};
export default SearchBar;
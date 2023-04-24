import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../searchSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { IMAGES } from "../../constants";
import "./Header.css";

const Header = (props) => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = props;

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const navigateBack = (event) => {
    navigate(-1);
  };

  return (
    <div className="heading">
      <div className="header-left">
        <img
          onClick={navigateBack}
          className="back-button"
          data-testid="back-button"
          src={IMAGES.BACK_BUTTON_IMAGE}
          alt={"Back"}
        />
        <span className="movie-category">{category}</span>
      </div>

      <div className="header-right">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
    </div>
  );
};
export default Header;

import { Input } from "../ui/Input";
import "../styles/search.css";

const Search = ({ onClose }) => {
  return (
    <div className="overlay-modal-search">
      <div className="modal-search-input">
        <div className="search-input">
          <Input placeholder="Search" type="search" className="styled-input" />
          <button onClick={onClose} className="close-search-button">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../ui/Input/Input";
import searchStyles from "./Search.module.css";

const Search = ({ onClose }) => {
  return (
    <div className={searchStyles.overlayModalSearch}>
      <div className={searchStyles.modalSearchInput}>
        <div className={searchStyles.searchInput}>
          <Input
            placeholder="Search"
            type="search"
            className={searchStyles.styledInput}
          />
          <button onClick={onClose} className={searchStyles.closeSearchButton}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Search;

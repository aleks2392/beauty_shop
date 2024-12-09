import React, {FC} from "react";
import { Input } from "../../ui/Input";
import searchStyles from "./Search.module.css";

type Props = {
  onClose: () => void;
};

export const Search: FC<Props> = ({ onClose }) => {
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

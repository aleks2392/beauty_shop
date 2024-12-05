import React, { useState } from "react";
import search from '../../../public/assets/img/search.svg';
import account from '../../../public/assets/img/account.svg';
import cart from '../../../public/assets/img/cart.svg';
import headerStyles from './Header.module.css';
import Modal from '../../components/modal/Modal';
import Search from '../../components/search/Search';

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  const openSearchModal = () => {
    setSearchActive(true);
  };

  const closeSearchModal = () => {
    setSearchActive(false);
  };

  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <h3 className={headerStyles.title}>
            Bloom <span className={headerStyles.titleSpan}>Beauty</span>
          </h3>
          <nav className={headerStyles.headerNav}>
            <a href="/" className={headerStyles.headerNavLink}>SHOP ALL</a>
            <a href="/" className={headerStyles.headerNavLink}>BESTSELLERS</a>
            <a href="/" className={headerStyles.headerNavLink}>COLLECTION</a>
            <a href="/" className={headerStyles.headerNavLink}>ABOUT US</a>
            <a href="/" className={headerStyles.headerNavLink}>BLOG</a>
          </nav>
          <div className={headerStyles.icons}>
            <div className={headerStyles.iconItem} onClick={openSearchModal}>
              <img src={search} alt="search" className={headerStyles.iconItemImg} />
              <span>SEARCH</span>
            </div>
            <div className={headerStyles.iconItem} onClick={handleModalOpen}>
              <img src={account} alt="account" className={headerStyles.iconItemImg} />
              <span>ACCOUNT</span>
            </div>
            <div className={headerStyles.iconItem}>
              <img src={cart} alt="cart" className={headerStyles.iconItemImg} />
              <span>CART</span>
            </div>
          </div>
        </div>
      </header>
      {modalActive && <Modal onClose={handleModalClose} />}
      {searchActive && <Search onClose={closeSearchModal} />}
    </>
  );
}

export default Header;

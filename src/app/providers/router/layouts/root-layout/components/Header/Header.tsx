import React, { useState } from "react";
import search from "../../../../../../../../public/assets/img/search.svg";
import account from "../../../../../../../../public/assets/img/account.svg";
import cart from "../../../../../../../../public/assets/img/cart.svg";
import headerStyles from "./Header.module.css";
import Modal from "../../../../../../../components/modal/Modal";
import { Search } from "../../../../../../../components/search/Search";
import { NavLink } from "react-router-dom";
import Cart from "../../../../../../../components/cart/Cart";

export function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

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
          <NavLink to="/" className={headerStyles.title}>
            <h3 className={headerStyles.title}>
              Bloom <span className={headerStyles.titleSpan}>Beauty</span>
            </h3>
          </NavLink>
          <nav className={headerStyles.headerNav}>
            <NavLink to="/shop-all" className={headerStyles.headerNavLink}>
              SHOP ALL
            </NavLink>
            <NavLink to="/bestsellers" className={headerStyles.headerNavLink}>
              BESTSELLERS
            </NavLink>
            <NavLink to="/collection" className={headerStyles.headerNavLink}>
              COLLECTION
            </NavLink>
            <NavLink to="/about" className={headerStyles.headerNavLink}>
              ABOUT US
            </NavLink>
            <NavLink to="/blog" className={headerStyles.headerNavLink}>
              BLOG
            </NavLink>
          </nav>
          <div className={headerStyles.icons}>
            <div className={headerStyles.iconItem} onClick={openSearchModal}>
              <img
                src={search}
                alt="search"
                className={headerStyles.iconItemImg}
              />
              <span>SEARCH</span>
            </div>
            <div className={headerStyles.iconItem} onClick={handleModalOpen}>
              <img
                src={account}
                alt="account"
                className={headerStyles.iconItemImg}
              />
              <span>ACCOUNT</span>
            </div>
            <div className={headerStyles.iconItem} onClick={handleOpenCart}>
              <img src={cart} alt="cart" className={headerStyles.iconItemImg} />
              <span>CART</span>
            </div>
          </div>
        </div>
      </header>
      {modalActive && <Modal onClose={handleModalClose} />}
      {searchActive && <Search onClose={closeSearchModal} />}
      {openCart && <Cart onClose={handleCloseCart} />}
    </>
  );
}

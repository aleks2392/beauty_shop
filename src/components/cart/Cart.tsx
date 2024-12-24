import React, { FC, useState } from "react";
import cartStyles from "./cart.module.css";
import cartItem from "../../../public/assets/img/forCart.png";
import { Button } from "../../ui/Button";

type Props = {
  onClose: () => void;
};

const Cart: FC<Props> = ({ onClose }) => {
  const [quantities, setQuantities] = useState<number[]>([1, 1, 1]);

  const increaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) => (i === index ? quantity + 1 : quantity))
    );
  };

  const decreaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  const removeItem = (index: number) => {
    setQuantities((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className={cartStyles.cartOverlay}>
      <div className={cartStyles.cartContent}>
        <button className={cartStyles.cartCloseButton} onClick={onClose}>
          X
        </button>

        <h2 className={cartStyles.cartTitle}>CART</h2>

        <div className={cartStyles.cartItems}>
          {quantities.map((quantity, index) => (
            <div key={index} className={cartStyles.cartItem}>
              <img
                src={cartItem}
                alt="Product"
                className={cartStyles.cartItemImage}
              />
              <div className={cartStyles.cartItemDetails}>
                <h3 className={cartStyles.itemTitle}>Soft Finish</h3>
                <p className={cartStyles.itemPrice}>$19.60</p>
                <div className={cartStyles.cartActions}>
                  <div className={cartStyles.cartQuantity}>
                    <button
                      className={cartStyles.quantityButton}
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span className={cartStyles.quantityValue}>{quantity}</span>
                    <button
                      className={cartStyles.quantityButton}
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={cartStyles.cartRemove}
                    onClick={() => removeItem(index)}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={cartStyles.cartFooter}>
          <div className={cartStyles.subtotal}>
            <span>SUBTOTAL</span>
            <span>
              $
              {quantities
                .reduce((total, quantity) => total + quantity * 19.6, 0)
                .toFixed(2)}
            </span>
          </div>
          <Button className={cartStyles.checkoutButton}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { FC, useState } from "react";
import modalStyles from "./Modal.module.css";
import { Modal as UiModal, ModalProps as UiModalProps } from "../../ui/Modal";
import RegistrationForm from "../registrationForm/RegistrationForm";
import { SignInForm } from "../signInForm";

type Props = {
  onClose: UiModalProps["onClose"];
};

const Modal: FC<Props> = ({ onClose }) => {
  const [createAccount, setCreateAccount] = useState(false);

  const openNewAccount = () => {
    setCreateAccount(true);
  };

  const closeNewAccount = () => {
    setCreateAccount(false);
  };
  return (
    <UiModal onClose={onClose}>
      <SignInForm onSubmit={() => {}} />
      <div className={modalStyles.modalFooter}>
        <p>
          Forgot your password?{" "}
          <a href="/" className={modalStyles.modalLink}>
            Recover password
          </a>
        </p>
        <p onClick={openNewAccount}>
          New to Bloom Beauty?{" "}
          <a href="#" className={modalStyles.modalLink}>
            Create an Account
          </a>
        </p>
      </div>
      {createAccount && <RegistrationForm onClose={closeNewAccount} />}
    </UiModal>
  );
};

export default Modal;

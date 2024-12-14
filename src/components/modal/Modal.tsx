import React, { FC, useState } from "react";
import modalStyles from "./Modal.module.css";
import googleImg from "../../../public/assets/img/google_img.png";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Modal as UiModal, ModalProps as UiModalProps } from "../../ui/Modal";
import RegistrationForm from "../registrationForm/RegistrationForm";

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
      <h2 className={modalStyles.modalTitle}>Log In</h2>
      <p className={modalStyles.modalSubtitle}>
        Please enter your e-mail and password:
      </p>
      <div className={modalStyles.modalInputGroup}>
        <Input placeholder={"Email" as string} type="email" />
        <Input placeholder="Password" type="password" />
      </div>
      <Button label="Log In" className="pink large">
        Log In
      </Button>
      <div className={modalStyles.modalDivider}>
        <span className={modalStyles.dividerLine}></span>
        <span className={modalStyles.dividerText}>OR</span>
        <span className={modalStyles.dividerLine}></span>
      </div>
      <Button
        label="Continue With Google"
        variant="transparent"
        className={modalStyles.modalGoogleButton}
      >
        <img src={googleImg} alt="Google" />
      </Button>
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

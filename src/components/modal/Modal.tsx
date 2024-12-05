/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from "react";
import modalStyles from "./Modal.module.css";
import googleImg from "../../../public/assets/img/google_img.png";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Modal as UiModal, ModalProps as UiModalProps } from "../../ui/Modal";

type Props = {
  onClose: UiModalProps["onClose"];
};

const Modal: FC<Props> = ({ onClose }) => {
  return (
    <UiModal onClose={onClose}>
      <h2 className={modalStyles.modalTitle}>Log In</h2>
      <p className={modalStyles.modalSubtitle}>
        Please enter your e-mail and password:
      </p>
      <div className={modalStyles.modalInputGroup}>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </div>
      <Button className={modalStyles.modalLoginButton}>Log In</Button>
      <div className={modalStyles.modalDivider}>
        <span className={modalStyles.dividerLine}></span>
        <span className={modalStyles.dividerText}>OR</span>
        <span className={modalStyles.dividerLine}></span>
      </div>
      <Button className={modalStyles.modalGoogleButton}>
        <img src={googleImg} alt="Google" />
        Continue With Google
      </Button>
      <div className={modalStyles.modalFooter}>
        <p>
          Forgot your password?{" "}
          <a href="/" className={modalStyles.modalLink}>
            Recover password
          </a>
        </p>
        <p>
          New to Bloom Beauty?{" "}
          <a href="/" className={modalStyles.modalLink}>
            Create an Account
          </a>
        </p>
      </div>
    </UiModal>
  );
};

export default Modal;

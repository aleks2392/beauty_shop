import { Modal, ModalProps as UiModalProps } from "../../ui/Modal";
import { FC } from "react";
import { Authorization } from "./Authorization";

type Props = {
  onClose: UiModalProps["onClose"];
};

export const AuthorizationModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Authorization />
    </Modal>
  );
};

import React from "react";
import { ModalBody, ModalHeader, Modal } from "reactstrap";

const Model = (props) => {
  const { modal, toggle } = props;

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
};

export default Model;

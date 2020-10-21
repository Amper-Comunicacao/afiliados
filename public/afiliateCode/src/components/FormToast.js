import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Modal, Button, Spinner } from "react-bootstrap";
// import { Toast } from "react-bootstrap";

export default function FormToast() {
  const appContext = useContext(AppContext);
  const {
    setShowToast,
    showToast,
    toastMessage,
    toastType,
    hideToast,
  } = appContext;

  if (toastMessage == "loading") {
    return (
      <Modal
        show={showToast}
        backdrop="static"
        keyboard={false}
        centered
        className={`border-${toastType} text-${toastType}`}
      >
        <Modal.Body className="h4 d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <Modal
      show={showToast}
      backdrop="static"
      keyboard={false}
      centered
      className={`border-${toastType} text-${toastType}`}
    >
      <Modal.Body className="h4">{toastMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowToast(false)}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

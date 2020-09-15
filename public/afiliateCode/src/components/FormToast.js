import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Toast } from "react-bootstrap";


export default function FormToast() {
  const appContext = useContext(AppContext);
  const { setShowToast, showToast, toastMessage, hideToast } = appContext;
  return (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={2500}
      autohide={hideToast}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
      }}
    >
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
  );
}

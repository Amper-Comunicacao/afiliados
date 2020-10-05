import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Toast } from "react-bootstrap";


export default function FormToast() {
  const appContext = useContext(AppContext);
  const { setShowToast, showToast, toastMessage,toastType, hideToast } = appContext;
  return (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={3500}
      className={`border-${toastType} text-${toastType}`}
      autohide={hideToast}
      // autohide={false}
      style={{
        position: "fixed",
        top: "50px",
        right: "50px",
        padding: "10px"
      }}
    >
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
  );
}

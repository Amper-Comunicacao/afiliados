import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Toast } from "react-bootstrap";


export default function FormToast() {
  const appContext = useContext(AppContext);
  const { setShowToast, showToast } = appContext;
  return (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={2500}
      autohide
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
      }}
    >
      <Toast.Body>Sua solicitação foi enviada com sucesso.Obrigado!</Toast.Body>
    </Toast>
  );
}

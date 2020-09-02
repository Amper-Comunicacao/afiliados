import React, { useState, useEffect, useCallback } from "react";
import AppContext from "./AppContext";

export default function AppState(props) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setForm({ [input]: e.target.value });
  };

  return (
    <AppContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        form,
        handleChange,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

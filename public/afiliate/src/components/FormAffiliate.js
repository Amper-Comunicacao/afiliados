import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import FormBank from "./FormBank";
import FormUser from "./FormUser";

export default function FormAffiliate() {
  const appContext = useContext(AppContext);
  const { step } = appContext;
  
switch (step) {
  case 1:
    return <FormUser/>;
  case 2:
    return <FormBank/>;
  default:
    break;
}


}

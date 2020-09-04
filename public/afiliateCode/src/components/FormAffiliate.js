import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import FormUser from "./FormUser";
import FormAddress from "./FormAddress";
import FormBank from "./FormBank";

export default function FormAffiliate() {
  const appContext = useContext(AppContext);
  const { step } = appContext;
  
switch (step) {
  case 1:
    return <FormUser/>;
  case 2:
    return <FormAddress/>;
  case 3:
    return <FormBank/>;
  default:
    break;
}


}

import { createContext } from "react";
export const creditCardInfo = {
  name: "",
  cardNumber: "",
  date: "",
  cvc: "",
};
export const FormContext = createContext(creditCardInfo);

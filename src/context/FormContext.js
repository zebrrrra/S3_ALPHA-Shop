import { createContext, useContext, useState } from "react";
export const creditCardInfo = {
  name: "",
  cardNumber: "",
  date: "",
  cvc: "",
};
const FormContext = createContext(creditCardInfo);
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({
  children,
  totalPrice,
  handleShipPriceChange,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [creditCard, setCreditCard] = useState(creditCardInfo);

  const handleStepClick = (e) => {
    const isNext = e === "next";
    const isPrev = e === "prev";
    if (isNext && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (isPrev && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  };

  const handleConfirmClick = () => {
    const ticketInfo = { 總價: totalPrice, 信用卡資訊: creditCard };
    console.log(ticketInfo);
    setCreditCard({
      ...creditCard,
      cardNumber: "",
      cvc: "",
      date: "",
      name: "",
    });
  };
  
  return (
    <FormContext.Provider
      value={{
        currentStep,
        handleStepClick,
        creditCard,
        handleInputChange,
        handleConfirmClick,
        handleShipPriceChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

import React from "react";
import AuthFooter from "../common/AuthFooter";
import Header from "../common/Header";
import Stepper from "./StepperPages/Stepper";
import StepOne from "./StepperPages/StepOne";
import StepTwo from "./StepperPages/StepTwo";
import StepThree from "./StepperPages/StepThree";

export default function ConnectWebsite() {
  const list = [<StepOne />, <StepTwo />, <StepThree />];

  return (
    <div className="">
      <Header />
      <Stepper list={list} />
      <AuthFooter />
    </div>
  );
}

import React from "react";
import Login from "./login/page";
import BenefitsList from "./login/components/BenefitsList";

export default function Home() {
  return (
    <>
      <Login />
      <BenefitsList />
    </>
  );
}

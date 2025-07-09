import Button from "@/components/Button/Button";
import React from "react";

export default function Home() {
  return (
    <>
      <p>Teste</p>
      <div>
        <Button label="Confirmar" priority="primary" />
        <Button label="Confirmar" priority="primary" disabled />
      </div>
      <div>
        <Button label="Confirmar" priority="secondary" />
        <Button label="Confirmar" priority="secondary" disabled />
      </div>
      <div>
        <Button label="Confirmar" priority="tertiary" />
        <Button label="Confirmar" priority="tertiary" disabled />
      </div>
    </>
  );
}

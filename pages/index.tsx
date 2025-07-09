import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Home() {
  return (
    <>
      <div>
        <Button label="Confirmar" priority="primary" />
        <Button label="Confirmar" priority="primary" disabled />
        <Button label="Confirmar" priority="primary" size="small" />
        <Button label="Confirmar" priority="primary" size="large" />
      </div>

      <div>
        <IconButton icon={<PersonOutlineOutlinedIcon />} />
        <IconButton icon={<PersonOutlineOutlinedIcon />} priority="secondary" />
        <IconButton
          icon={<PersonOutlineOutlinedIcon />}
          priority="primary"
          disabled
        />
        <IconButton icon={<PersonOutlineOutlinedIcon />} size="small" />
        <IconButton icon={<PersonOutlineOutlinedIcon />} size="large" />
      </div>
    </>
  );
}

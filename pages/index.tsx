import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Divider from "@/components/Divider/Divider";
import Card from "@/components/Card/Card";

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
      <div>
        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" weight="thin" />
        <div style={{ height: "200px" }}>
          <Divider orientation="vertical" />
        </div>
        <div style={{ height: "200px" }}>
          <Divider orientation="vertical" weight="thin" />
        </div>

        <div style={{ width: "200px" }}>
          <Card title="Título do Card" color="primary">
            <p>Conteúdo do Card</p>
          </Card>
          <Card color="secondary">
            <p>Conteúdo do Card</p>
          </Card>
        </div>
      </div>
    </>
  );
}

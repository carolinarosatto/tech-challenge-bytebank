import { useEffect, useState } from "react";
import MenuSide from "../MenuSide";
import MenuHorizontal from "../MenuHorizontal";
// import MenuHamburguer from "./MenuHamburguer";

export default function MenuResponsive() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width > 1200) return <MenuSide />;
  if (width > 768) return <MenuHorizontal />;
  // return <MenuHamburguer />;
}

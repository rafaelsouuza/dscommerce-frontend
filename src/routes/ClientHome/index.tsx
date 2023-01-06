import { Outlet } from "react-router-dom";
import { HeaderClient } from "../../components/HeaderClient";

export const ClientHome = () => {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
};

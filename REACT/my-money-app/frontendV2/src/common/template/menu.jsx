import React, { useState } from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="/" label="Dashboard" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem path="/vamos-la" selected={true} label="Vamos" icon="usd" />
        <MenuItem
          path="/billingCycles"
          label="Ciclos de Pagamentos"
          icon="usd"
        />
      </MenuTree>
    </ul>
  );
};

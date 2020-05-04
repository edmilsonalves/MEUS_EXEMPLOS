import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { menu, selected } from "../../common/template/menu.slice";

export default (props) => {
  const dispatch = useDispatch();
  const stateMenu = useSelector(menu);
  const active = stateMenu && stateMenu.selected === props.path;

  return (
    <li className={active ? "active" : ""}>
      <Link to={props.path} onClick={() => dispatch(selected(props.path))}>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      </Link>
    </li>
  );
};

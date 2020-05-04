import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tab, selectTab } from "../../common/tab/tab.slice";
import If from "../operator/if";

const TabHeader = (props) => {
  const dispatch = useDispatch();

  const stateTab = useSelector(tab);

  const selected = stateTab.selected === props.target;
  const visible = stateTab.visible[props.target];
  // const [visible, setVisible] = useState(true);

  return (
    <If test={visible}>
      <li className={selected ? "active" : ""}>
        <a
          href="javascript:;"
          data-toggle="tab"
          onClick={() => dispatch(selectTab(props.target))}
          data-target={props.target}
        >
          <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
      </li>
    </If>
  );
};

export default TabHeader;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tab } from "../../common/tab/tab.slice";
import If from "../operator/if";

const TabContent = (props) => {
  const stateTab = useSelector(tab);
  const selected = stateTab.selected === props.id;

  const [visible, setVisible] = useState(true);

  return (
    <If test={visible}>
      <div id={props.id} className={`tab-pane ${selected ? "active" : ""}`}>
        {props.children}
      </div>
    </If>
  );
};

export default TabContent;

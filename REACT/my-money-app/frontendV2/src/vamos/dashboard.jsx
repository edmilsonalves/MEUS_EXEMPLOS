import React, { useEffect } from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";
import { selectTab } from "../common/tab/tab.slice";
import { useDispatch, useSelector } from "react-redux";

export default (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

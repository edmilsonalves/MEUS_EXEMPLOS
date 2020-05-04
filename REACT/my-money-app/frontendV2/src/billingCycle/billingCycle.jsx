import React, { useEffect } from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tab.slice";
import { useDispatch, useSelector } from "react-redux";

export default (props) => {
  const dispatch = useDispatch();

  const init = () => {
    dispatch(selectTab("tabList"));
    dispatch(showTabs(["tabList", "tabCreate"]));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <ContentHeader title="Ciclo de pagamento" small="Versão 1.0" />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader label="Listar" icon="bars" target="tabList" />
            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
            <TabHeader label="Excluir" icon="thash-o" target="tabDelete" />
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList">list</TabContent>
            <TabContent id="tabCreate">incluir</TabContent>
            <TabContent id="tabUpdate">alterar</TabContent>
            <TabContent id="tabDelete">excluir</TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  );
};

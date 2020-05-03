import React from "react";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
export default (props) => (
  <div>
    <ContentHeader title="Dashboard" small="Versão 1.0" />
    <Content>
      <div className="row">
        <ValueBox
          color="green"
          icon="bank"
          value="R$ 10"
          text="Total de Créditos"
        />
        <ValueBox
          color="red"
          icon="credit-card"
          value="R$ 10"
          text="Total de Débitos"
        />
        <ValueBox
          color="green"
          icon="money"
          value="R$ 10"
          text="Total consolidado"
        />
      </div>
    </Content>
  </div>
);

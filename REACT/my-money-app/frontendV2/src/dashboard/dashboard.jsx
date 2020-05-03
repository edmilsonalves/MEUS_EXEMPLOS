import React from "react";
import { useSelector } from "react-redux";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import { summary } from "./dashboard.slice";

const Dashboard = (props) => {
  const { credit, debt } = useSelector(summary);

  return (
    <div>
      <ContentHeader title="Dashboard" small="Versão 1.0" />
      <Content>
        <div className="row">
          <ValueBox
            color="green"
            icon="bank"
            value={`R$ ${credit}`}
            text="Total de Créditos"
          />
          <ValueBox
            color="red"
            icon="credit-card"
            value={`R$ ${debt}`}
            text="Total de Débitos"
          />
          <ValueBox
            color="green"
            icon="money"
            value={`R$ ${credit - debt}`}
            text="Total consolidado"
          />
        </div>
      </Content>
    </div>
  );
};

export default Dashboard;

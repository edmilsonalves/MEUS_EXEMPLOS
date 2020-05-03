import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
// import { summary, setSummary, setDebt } from "./dashboard.slice";
import { getSummary } from "./dashboardService";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  // const { credit, debt } = useSelector(summary);

  const [credit, setCredit] = useState(0);
  const [debt, setDebt] = useState(0);

  useEffect(async () => {
    const summary = await getSummary();
    if (summary) {
      setCredit(summary.credit);
      setDebt(summary.debt);
    }
    // dispatch(setSummary(summary));
  }, []);

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

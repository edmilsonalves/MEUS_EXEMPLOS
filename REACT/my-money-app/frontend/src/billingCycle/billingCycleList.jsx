import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./billingCycleActions";

const BillingCycleList = (props: any) => {
  useEffect(() => {
    props.getList();
  }, []);

  function renderRows() {
    const list = props.list || [];
    return list.map((bc) => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => props.showUpdate(bc)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.showDelete(bc)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th className="table-actions">Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default BillingCycleList;

// const mapStateToProps = (state) => ({ list: state.billingCycle.list });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);

import axios from "axios";
import { toastr } from "react-redux-toastr";
import { selectTab, showTabs } from "../common/tab/tab.slice";

const BASE_URL = "http://localhost:3003/api";

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Erro", error));
      });
  };
}

export function init() {
  return [showTabs("tabList", "tabCreate"), selectTab("tabList")];
}

import { createStore } from "redux";
import { StoreState } from "../types/index";
import { enthusiasm } from "../reducers/index";
import { EnthusiasmAction } from "../actions/index";

const initialState: StoreState = {
  enthusiasmLevel: 10,
  languageName: "TypeScript",
};

const store = createStore<StoreState, EnthusiasmAction, any, any>(
  enthusiasm,
  initialState
);

export default store;

import * as constants from "../constants";

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface ResetEnthusiasm {
  type: constants.RESET_ENTHUSIAM;
}

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | ResetEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export function resetEnthusiam(): ResetEnthusiasm {
  return {
    type: constants.RESET_ENTHUSIAM,
  };
}

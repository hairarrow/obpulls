import { Action, Actions } from "./actions";

export interface Pull {
  id: string;
  created_at: string;
  closed_at?: string;
}

export const defaultState = {
  loaded: false,
  loading: false,
  page: 1,
  pulls: [] as Pull[]
};

export type State = typeof defaultState;

export function reducer(state = defaultState, action: Action): State {
  switch (action.type) {
    case Actions.Start: {
      return { ...state, loading: true };
    }
    case Actions.Next: {
      return { ...state, page: action.value };
    }
    case Actions.Finished: {
      return { ...state, loading: false, loaded: true };
    }
    case Actions.Load: {
      return { ...state, pulls: action.value };
    }
    default:
      throw new Error(`Unknown action type`);
  }
}

import { Pull } from "./reducer";

export enum Actions {
  Start = "LOAD_START",
  Next = "LOAD_NEXT",
  Error = "LOAD_ERROR",
  Load = "LOAD_PULLS",
  Finished = "LOAD_FINISHED"
}

export type Action =
  | {
      type: Actions.Start | Actions.Finished;
    }
  | { type: Actions.Next; value: number }
  | { type: Actions.Load; value: Pull[] };

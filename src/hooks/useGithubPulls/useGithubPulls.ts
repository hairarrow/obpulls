import { useEffect, useReducer } from "react";
import parseLinkHeader from "parse-link-header";

import { Actions } from "./actions";
import { reducer, defaultState, Pull, State } from "./reducer";

export interface Props {
  repo?: string;
  state?: "all" | "closed" | "open";
  perPage?: number;
}

export interface Hook {
  pulls: Pull[];
  loading: State["loading"];
}

const GITHUB_API = "https://api.github.com";

function serializePull(pull: any): Pull {
  const keys = ["id", "created_at", "closed_at"];
  const pullToObj = keys.reduce((pullObj, key) => {
    if (key in pull) {
      pullObj[key] = pull[key];
    }
    return pullObj;
  }, {} as any);

  return pullToObj as Pull;
}

export function useGithubPulls(
  { repo, state, perPage }: Props = {
    repo: "downshift-js/downshift",
    state: "all",
    perPage: 50
  }
): Hook {
  const [{ loaded, loading, pulls, page }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  const complete = () => dispatch({ type: Actions.Finished });

  useEffect(() => {
    async function run() {
      try {
        dispatch({ type: Actions.Start });
        const fetchPulls = await fetch(
          `${GITHUB_API}/repos/${repo}/pulls?state=${state}&page=${page}&per_page=${perPage}`
        );
        const link = parseLinkHeader(fetchPulls.headers.get("link") as string);
        const pulls = await fetchPulls.json();
        const value = pulls.map(serializePull);
        dispatch({ type: Actions.Load, value });

        if (link?.next) {
          dispatch({ type: Actions.Next, value: Number(link.next.page) });
        } else {
          complete();
        }
      } catch (err) {
        complete();
      }
    }

    if (!loaded) run();
  }, [page, loaded, perPage, repo, state]);

  if (Number(perPage) > 100) {
    throw new Error("useGithubPulls: Maximum number of items per page is 100");
  }

  return {
    loading,
    pulls
  };
}

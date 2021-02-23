import { FC, useMemo } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

import { serializePulls } from "./serializePulls";
import { useGithubPulls } from "../../hooks/useGithubPulls";

export const GithubPullsChart: FC = () => {
  const { loading, pulls } = useGithubPulls();
  const data = useMemo(() => serializePulls(pulls), [pulls]);

  return (
    <>
      {loading && <p>Still loading</p>}
      {/* <BarChart width={500} height={300} data={data}>
        <Legend />
      </BarChart> */}
    </>
  );
};

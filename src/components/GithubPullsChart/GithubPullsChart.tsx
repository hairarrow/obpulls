import { FC, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid
} from "recharts";

import { serializePulls } from "./serializePulls";
import { useGithubPulls } from "../../hooks/useGithubPulls";
import { Formatter } from "recharts/types/component/DefaultLegendContent";

const renderLegendText: Formatter = (value) =>
  value !== "gap" && (
    <span style={{ color: "rgba(0, 0, 0, 0.6)", fontWeight: "bold" }}>
      {value}
    </span>
  );

export const GithubPullsChart: FC = () => {
  const { pulls } = useGithubPulls();
  const data = useMemo(() => serializePulls(pulls), [pulls]);

  return (
    <ResponsiveContainer width="100%" minHeight={500}>
      <BarChart data={data} margin={{ top: 8, bottom: 8 }}>
        <CartesianGrid stroke="#cecece" vertical={false} />
        <Legend
          width={240}
          verticalAlign="top"
          align="left"
          layout="vertical"
          formatter={renderLegendText}
        />
        <XAxis
          height={80}
          dy={12}
          dataKey="date"
          interval={12}
          tickLine={false}
          tickFormatter={(value) => value.split("/")[0]}
          tick={{ fill: "rgba(0, 0, 0, 0.4)" }}
          stroke="transparent"
        />
        <YAxis
          width={24}
          dx={-16}
          type="number"
          tickLine={false}
          tickCount={25}
          tick={{ fill: "rgba(0, 0, 0, 0.4)" }}
          stroke="transparent"
        />
        <Tooltip />
        <Bar
          name="PRs opened"
          stackId="x"
          dataKey="opened"
          fill="rgb(241,160,70)"
          radius={2}
          legendType="circle"
        />
        <Bar
          stackId="x"
          dataKey="gap"
          barSize={1}
          fill="transparent"
          tooltipType="none"
        />
        <Bar
          name="PRs closed"
          stackId="x"
          dataKey="closed"
          fill="rgb(117, 250, 139)"
          radius={2}
          legendType="circle"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

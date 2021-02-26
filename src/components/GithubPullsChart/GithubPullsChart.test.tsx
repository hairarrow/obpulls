import { render, screen } from "@testing-library/react";
import { GithubPullsChart } from "./GithubPullsChart";

test("renders chart legend", () => {
  render(<GithubPullsChart width={100} height={100} />);
  const openedLegend = screen.getByText(/Prs opened/i);
  const closedLegend = screen.getByText(/Prs closed/i);

  expect(openedLegend).toBeInTheDocument();
  expect(closedLegend).toBeInTheDocument();
});

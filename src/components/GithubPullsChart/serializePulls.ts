import { eachMonthOfInterval, format, isBefore } from "date-fns";

import { Pull } from "../../hooks/useGithubPulls/reducer";

const DATE_KEY = "yyyy/MM";

export function serializePulls(pulls: Pull[]) {
  const monthBounds = [...pulls].reduce(
    (dates, pull) => {
      const start = new Date(pull.created_at);

      if (isBefore(start, dates.start)) {
        return { ...dates, start };
      }
      return dates;
    },
    { end: new Date(), start: new Date() }
  );
  const data = eachMonthOfInterval(monthBounds).reduce((days, day) => {
    days[format(new Date(day), DATE_KEY)] = { opened: 0, closed: 0 };
    return days;
  }, {} as any);

  for (const pull of pulls) {
    const createdKey = format(new Date(pull.created_at), DATE_KEY);
    const closedKey =
      pull?.closed_at && format(new Date(pull.closed_at), DATE_KEY);

    data[createdKey].opened += 1;

    if (closedKey && data[closedKey]) {
      data[closedKey].closed += 1;
    }
  }

  return Object.keys(data).map((date) => {
    const { opened, closed } = data[date];

    return {
      date,
      opened,
      closed
    };
  });
}

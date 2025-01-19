//31.countPageViews

const countPageViews = (pageViews, country, interval) => {
  const countryDate = [];
  for (let page of pageViews) {
    if (
      page.country === country &&
      page.date >= interval.startDate &&
      page.date <= interval.endDate
    ) {
      countryDate.push(page.count);
    }
  }
  return countryDate.reduce((sum, total) => sum + total, 0);
};

// Example usage:
console.log(
  countPageViews(
    [
      { date: "2023-05-10T10:00:00.000Z", country: "RO", count: 104 },
      { date: "2023-05-05T10:00:00.000Z", country: "USA", count: 151 },
      { date: "2023-05-07T10:00:00.000Z", country: "RO", count: 67 },
      { date: "2023-05-10T10:00:00.000Z", country: "CA", count: 89 },
      { date: "2023-05-12T12:00:00.000Z", country: "RO", count: 500 },
    ],
    "RO",
    {
      endDate: "2023-05-12T10:00:00.000Z",
      startDate: "2023-05-01T10:00:00.000Z",
    }
  )
); // 171

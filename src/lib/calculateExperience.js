export function calculateExperience(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  // Calculate the difference in time (in milliseconds)
  const timeDifference = end - start;

  // Convert milliseconds to total days
  const totalDays = timeDifference / (1000 * 3600 * 24);

  // Calculate total months as days divided by average days in a month (30.44 days)
  const totalMonths = totalDays / 30.44;

  // If experience is less than 12 months, return in months
  if (totalMonths < 12) {
    return `${Math.round(totalMonths)} Months`;
  }

  // Convert total months into years as a decimal
  const years = totalMonths / 12;

  return `${years.toFixed(1)} Years`;
}

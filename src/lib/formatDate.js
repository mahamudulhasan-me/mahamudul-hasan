export function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? "Present" : new Date(endDate);

  // Helper function to format date to "MONTH YEAR"
  const formatDate = (date) => {
    const options = { year: "2-digit", month: "short" };
    return new Intl.DateTimeFormat("en-US", options).format(date).toUpperCase();
  };

  const formattedStart = formatDate(start);

  // If end date is "Present", return the formatted start with "Present"
  if (end === "Present") {
    return `${formattedStart} - Present`;
  }

  const formattedEnd = formatDate(end);

  // Return the formatted start and end range
  return `${formattedStart} - ${formattedEnd}`;
}

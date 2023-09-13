import cases from "../models/cases.js";

function getDateDifferenceFromDB(dbDate) {
  // Convert the database date string to a JavaScript Date object
  const dbDateObj = new Date(dbDate);

  // Get today's date
  const today = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = today - dbDateObj;

  // Calculate the difference in months and years
  const monthsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 30)
  );
  const yearsDifference = Math.floor(monthsDifference / 12);

  return { months: monthsDifference, years: yearsDifference };
}

// Example usage:
const dbDate = cases.Casefilingdate; // Replace this with your database date
const dateDifference = getDateDifferenceFromDB(dbDate);
console.log(`Months: ${dateDifference.months}, Years: ${dateDifference.years}`);

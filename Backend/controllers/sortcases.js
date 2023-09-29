import cases from "../models/cases.js";

export const sortcases = async (req, res) => {
  const cased = cases.find().lean();
  // casesd.sort((a, b, c) => {
  //   const severityA = a.Severity || ""; // If Severity is undefined, consider it an empty string
  //   const severityB = b.Severity || ""; // If Severity is undefined, consider it an empty string
  //   const severityC = c.Severity || "";
  cased.sort((a, b) => {
    const severityOrder = { "Very High": 1, Medium: 2, Normal: 3 };
    const severityA = severityOrder[a.Severity] || 4;
    const severityB = severityOrder[b.Severity] || 4;

    if (severityA !== severityB) {
      return severityA - severityB;
    }

    // If severity is the same, sort by date in descending order
  });
  // Sort in a way that "Very High" Severity comes first
  // if (
  //   severityA === "Very High" &&
  //   severityB !== "Very High" &&
  //   severityC !== "Very High"
  // ) {
  //   return -1; // a comes before b
  // } else if (
  //   severityB === "Very High" &&
  //   severityA !== "Very High" &&
  //   severityC !== "Very High"
  // ) {
  //   return 1; // b comes before a
  // } else if (
  //   severityC === "Very High" &&
  //   severityB !== "Very High" &&
  //   severityA !== "Very High"
  // ) {
  //   return 1;
  // } else {
  //   return 0; // Leave the order unchanged
  // }

  res.status(200).json(sortcases);
  console.log(casesList);
};

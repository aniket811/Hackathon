import cases from "../models/cases.js";
import moment from "moment";

export const getAllCases = async (req, res) => {
  try {
    const casesList = await cases.find();
    res.status(200).json(casesList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const sortAllcases = async (req, res) => {
  try {
    const Caseid = 4;
    const filter = { Caseid: Caseid };
    // const update = { $set: { Severity: "Very High" } };
    const casesList = await cases.find();

    for (let a = 0; a <= casesList.length; a++) {
      const item = casesList[a];

      if (item.LawType == "Criminal") {
        console.log(item);
        if (yearsFromGivenDate(item.Casefilingdate) >= 4) {
          const result = await cases.updateMany(
            filter,
            { $set: { Severity: "Very High" } },
            {
              upsert: true,
              returnOriginal: false,
            }
          );
          console.log(item);
          // res.status(200).json(result);
        } else if (
          yearsFromGivenDate(item.Casefilingdate) >= 2 ||
          yearsFromGivenDate(item.Casefilingdate) <= 4
        ) {
          let a = (cases.Severity = "Medium");
          const result = await cases.findOneAndUpdate(
            filter,
            { $set: { Severity: "Medium" } },
            {
              upsert: true,
              returnOriginal: false,
            }
          );
        }
        // res.status(200).json(result);
        // } else {
        //   let a = (cases.Severity = "Normal");
        //   const result = await cases.updateMany(
        //     {},
        //     { $set: { Severity: "Normal" } },
        //     {
        //       upsert: true,
        //       returnOriginal: false,
        //     }
        //   );
      }
      cases.Severity = "Normal";
      // console.log(result);
    }

    // casesList.Severity = "Normal";
    // casesList.sort((a, b) => {
    //   const severityA = a.Severity || ""; // If Severity is undefined, consider it an empty string
    //   const severityB = b.Severity || ""; // If Severity is undefined, consider it an empty string

    //   // Sort in a way that "Very High" Severity comes first
    //   if (severityA === "Very High" && severityB !== "Very High") {
    //     return -1; // a comes before b
    //   } else if (severityB === "Very High" && severityA !== "Very High") {
    //     return 1; // b comes before a
    //   } else {
    //     return 0; // Leave the order unchanged
    //   }
    // });
    // res.status(200).json(result);
    // console.log(casesList);

    function yearsFromGivenDate(dateString) {
      const givenDate = moment(dateString);
      const currentDate = moment();
      const years = currentDate.diff(givenDate, "years");
      return years;
    }
  } catch (err) {
    console.log(err);
  }
};

import cases from "../models/cases.js";

export const sortcases = async (req, res) => {
  try {
    const { severity } = req.body;
    const sortedCases = await cases.find({ Severity: severity });
    res.status(200).json(sortedCases);
  } catch (error) {
    res.status(400).json("Something went wrong.");
    console.log(error);
  }
};

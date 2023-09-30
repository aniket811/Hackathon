import cases from "../models/cases.js";

export const sortcases = async (req, res) => {
  const { severity } = req.body;
  const sortcases = await cases.find({ Severity: severity });
  res.status(200).json(sortcases);
};

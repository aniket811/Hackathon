import cases from "../models/cases.js";

export const sortcases = async (req, res) => {
  const { severity } = req.body;
  const sortcases = await cases.find({ Severity: severity });
  res.status(200).json(sortcases);
};

export const searchById = async (req, res) => {
  const { Caseid } = req.body;
  const searchByCaseId = await cases.find({ Caseid: Caseid });
  res.status(200).json(searchByCaseId);
};

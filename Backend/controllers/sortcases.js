import getAllCases from "./cases.js";
import cases from "../models/cases.js";

export const sorting = (req, res) => {
  const { years } = req.body;
  try {
    const sort = cases.create({});
  } catch (error) {}
};

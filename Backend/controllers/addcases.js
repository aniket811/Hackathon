import express from "express";
import cases from "../models/cases.js";

export const addcases = async (req, res) => {
  const {
    Caseid,
    Section,
    Casetype,
    Casefilingdate,
    Firstparty,
    Secondparty,
    LawType,
  } = req.body;
  try {
    const newJudge = await cases.create({
      Caseid,
      Section,
      Casetype,
      Casefilingdate,
      Firstparty,
      Secondparty,
      LawType,
    });
    res.status(200).json(newJudge);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//  message: error.message,
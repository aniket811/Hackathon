import express from "express";

import { getAllCases, sortAllcases } from "../controllers/cases.js";

const router = express.Router();

router.get("/getcases", getAllCases);
router.patch("/sortcases", sortAllcases);

export default router;

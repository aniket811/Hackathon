import express from "express";

import { updateCases } from "../controllers/updatecases.js";
import { sortcases } from "../controllers/sortcases.js";

const router = express.Router();

router.patch("/updateCases", updateCases);
router.get("/sort", sortcases);

export default router;

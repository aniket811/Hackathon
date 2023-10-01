import express from "express";

import { updateCases } from "../controllers/updatecases.js";
import { sortcases } from "../controllers/sortcases.js";
import { addcases } from "../controllers/addcases.js";

const router = express.Router();

router.post("/addcases");
router.patch("/updateCases", updateCases);
router.get("/sort", sortcases);
router.post("/addcases", addcases);

export default router;

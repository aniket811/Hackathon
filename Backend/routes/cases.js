import express from "express";

import { updateCases } from "../controllers/updatecases.js";
import { sortcases } from "../controllers/sortcases.js";
import { addcases } from "../controllers/addcases.js";
import { getAllCases } from "../controllers/getallcases.js";

const router = express.Router();

router.post("/addcases",addcases);
router.patch("/updateCases", updateCases);
router.get("/sortcases", sortcases);
router.post("/addcases", addcases); 
router.get("/getallcases", getAllCases);
export default router;

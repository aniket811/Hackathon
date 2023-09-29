//dont use this file now

import express from "express";

import { signup, login } from "../controllers/clerk_auth.js";
import { clerks } from "../controllers/getclerks.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getallClerks", clerks);

export default router;

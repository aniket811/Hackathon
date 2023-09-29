import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import clerk from "../models/clerk_auth.js";

export const signup = async (req, res) => {
  const { judge_id, name, email, password } = req.body;
  try {
    const existinguser = await clerk.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "Judge already exists..." });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const newClerk = await clerk.create({
      judge_id,
      name,
      email,
      password: hashedpassword,
      userType: "clerk",
    });

    const token = jwt.sign(
      { email: newClerk.email, id: newClerk.judge_id },
      "test",
      {
        expiresin: "1h",
      }
    );
    res.status(200).json({ result: newClerk, token });
    console.log(token);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const login = async (req, res) => {
  const { judge_id, password } = req.body;
  try {
    const existinguser = await clerk.findOne({ judge_id });
    if (!existinguser) {
      return res.status(404).json({ message: "Judge not found ..." });
    }
    const isPasswordcrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordcrt) {
      return res.status(400).json({ message: "Inavlid credentials..." });
    }

    const token = jwt.sign(
      { email: judges.email, id: existinguser.judge_id },
      "test",
      { expiresIn: "3h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("Something went worng");
  }
};

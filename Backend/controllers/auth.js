import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { judge_id, name, email, password } = req.body;
  try {
    const existinguser = await judges.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "Judge already exists..." });

      const hashedpassword = await bcrypt.hash(password, 12);
      const newJudge = await judges.create({
        judge_id,
        name,
        email,
        password: hashedpassword,
      });

      const token = jwt.sign(
        { email: newJudge.judges, newJudge: newJudge._id },
        "test",
        { expiresin: "1h" }
      );
      res.status(200).json({ result: newJudge, token });
    }
  } catch (error) {
    res.status(500).json("Something went worng");
  }
};

export const login = async (req, res) => {
  const { judge_id, password } = req.body;
  try {
    const existinguser = await judges.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "Judge already exists..." });

      const isPasswordcrt = await bcrypt.compare(
        password,
        existinguser.password
      );
      if (!isPasswordcrt) {
        return res.status(400).json({ message: "Inavlid credentials..." });
      }

      const token = jwt.sign({ email: judges.email, id: newJudge._id, test });
      res.status(200).json({ result: Judges, token });
    }
  } catch (error) {
    res.status(500).json("Something went worng");
  }
};

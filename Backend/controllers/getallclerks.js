import clerk from "../models/clerk_auth.js";

export const clerks = async () => {
  try {
    const getallClerks = await clerk.find();
    res.status(200).json(getallClerks);
  } catch (error) {
    res.status(400).json("invalid request");
  }
};

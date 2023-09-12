import mongoose from "mongoose";

const judgeSchema = mongoose.Schema({
  judge_id: { type: number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("Judges", judgeSchema);

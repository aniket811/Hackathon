import mongoose from "mongoose";

const casesSchema = mongoose.Schema({
  Caseid: { type: "String", required: true },
  Section: { type: "String", required: true },
  Casetype: { type: "String", required: true },
  Casefilingdate: { type: "String", required: true },
  Firstparty: { type: "String", required: true },
  Secondparty: { type: "String", required: true },
  Severity: { type: "String", required: true },
  Judgeallocated: { type: "String", required: true },
  LawType: { type: "String", required: true },
});

export default mongoose.model("cases", casesSchema);

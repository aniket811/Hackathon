import cases from "../models/cases.js";
import { Mongoose } from "mongoose";
const mongoose = Mongoose.mongoose;
export const sortcases = async (req, res) => {
  try{
    // object property destructuring 
  let  severity  = req.body.severity;   
  severity=severity.toLowerCase();
  const sortcases = await cases.find({ Severity: severity });
  console.log(severity);
  if(sortcases.length === 0) return res.status(404).json({message: " Sorry ! No cases found"});
  
  return res.status(200).json(sortcases);
}
catch(error){
  
  return res.status(404).json({message: error.message})
}
};




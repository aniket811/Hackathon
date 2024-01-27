import Case from '../models/cases.js';
export const getAllCases = async (req,res) => {
    try {
        //ToDo :add pagination 
        const cases = await Case.find();
        return res.status(200).json(cases);// return all cases 
    } catch (error) {
        console.error('Error getting cases:', error);
        throw error;
    }
};

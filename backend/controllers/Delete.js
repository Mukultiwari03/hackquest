const Student = require("../models/Student");

exports.deleteObject = async (req, res) => {
    try {
        const { objectNeeded } = req.body;
        console.log("this is in delete object",objectNeeded)
        await Student.deleteOne({ name: objectNeeded.name });
        res.status(200).json({ message: 'Object deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting object' });
    }
}

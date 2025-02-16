const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Ensure this is the correct model import

// Use the imported model instead of redefining it
const Model = Trip;

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const q = await Model.find().exec();

        if (!q || q.length === 0) {
            return res.status(404).json({ error: "No trips found" });
        }

        return res.status(200).json(q);
    } catch (err) {
        return res.status(500).json({ error: "Database query error", details: err });
    }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model.findOne({ 'code': req.params.tripCode }).exec();

        if (!q) {
            return res.status(404).json({ error: "Trip not found" });
        }

        return res.status(200).json(q);
    } catch (err) {
        return res.status(500).json({ error: "Database query error", details: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

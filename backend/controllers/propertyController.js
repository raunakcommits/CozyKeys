const propertyModel = require("../models/propertyModel");

exports.getAllProperties = (req, res) => {
    propertyModel.getAllProperties((err, results) => {

        if (err) {
            console.error("❌ Error fetching properties:", err);

            return res.status(500).json({
                success: false,
                message: "Failed to fetch properties"
            });
        }

        res.status(200).json({
            success: true,
            properties: results
        });
    });
};

exports.getPropertyById = (req, res) => {
    const { id } = req.params;

    propertyModel.getPropertyById(id, (err, results) => {

        if (err) {
            console.error("❌ Error fetching property:", err);

            return res.status(500).json({
                success: false,
                message: "Failed to fetch property"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        res.status(200).json({
            success: true,
            property: results[0]
        });
    });
};
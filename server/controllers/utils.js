const data = require("../models/data");

exports.getAllData = (req, res) => {
    data.find()
        .then((data) => res.json(data))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Qustion not found", error: err.message })
        );
};

exports.postQuestion = (req, res) => {
    data.create(req.body)
        .then((data) => res.json({ message: "Question added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed", error: err.message })
        );
};





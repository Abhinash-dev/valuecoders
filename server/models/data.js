const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    selectValue: {
        type: "String",

    },
    question: {
        type: "String",
    },
    option1: {
        type: "String",
    },
    option2: {
        type: "String",
    },
    option3: {
        type: "String",
    },
    option4: {
        type: "String",
    }
});

const data = mongoose.model("data", DataSchema);

module.exports = data;
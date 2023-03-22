const express = require("express");
const router = express.Router();

const {
    getAllData,
    postQuestion,
    
} = require("../controllers/utils");


router.get("/",getAllData);
router.post("/",postQuestion);


module.exports = router;

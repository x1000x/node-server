const express = require("express");
const router = express.Router();

//routes

router.get("/user", (req, res, next) =>{
    res.json({
        data: "hey you hit",  
    })
});

module.exports = router;
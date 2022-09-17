const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("caught")
    // console.log(JSON.stringify(parse.parseSchedule()))
    // res.json(JSON.stringify(parse.parseSchedule()));
    console.log(res.json());
});

module.exports = router;
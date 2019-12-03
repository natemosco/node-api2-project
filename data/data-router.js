const express = require("express");
//make sure to invoke it an use uppercase R for .Router()
const router = express.Router();

const data = require("./db");

router.use(express.json());


router.get ("/", (req, res) => {
    data.
    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
router.get ("/:id", (req, res) => {

    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
router.post ("/", (req, res) => {

    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
router.delete ("/", (req, res) => {

    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
router.put ("/", (req, res) => {

    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
router. ("/", (req, res) => {

    .then( => {

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: ""})
    })
});
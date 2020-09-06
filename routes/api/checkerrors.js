const express = require("express");
const router = express.Router();
const Promise = require("promise");

const XLSX = require("xlsx");


const checkfilenamemw = require("../../middleware/new/checkfilenamemw");

router.post("/", (req, res) => {

    var xlText = undefined

    function prepare() {
        return new Promise((resolve, reject) => {

            filename = req.body.filename;
            workbook = XLSX.readFile(filename);
            sheet_name_list = workbook.SheetNames;
            xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);



            if (filename && xlText) {
                resolve();
            } else {
                reject("Error: Something went wrong with filename or reading Excel data");
            }
        });
    }

    // function sequentialCheck() {
    //     checkcolumnsmw(req, res, xlText)
    //     checkblankcells(req, res, xlText)
    //     checkmailformatmw(req, res, xlText)
    //     checkphonenumbermw(req, res, xlText)
    //     checkduplicatesmw(req, res, xlText)
    //     addtodatabasemw(req, res, xlText)


    prepare()

        .then(checkfilenamemw(req, res, filename, xlText))
        .catch((err) => console.log(err));

})

module.exports = router;
const express = require('express')
const router = express.Router()
const { check, body } = require('express-validator/check');

const CompanyDatabase = require('../../models/CompanyDatabase')

// @route POST api/requests
// @desc Search Parameter
// @access Public

router.post('/', [
    
    check('parameter', 'Parameter is required').not().isEmpty(),

], async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { parameter } = req.body

    try {
        let searchResult = await CompanyDatabase.findOne({ parameter })

        res.json({
            result: searchResult
        })

    }catch(err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router
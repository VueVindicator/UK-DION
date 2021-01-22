const mongoose = require('mongoose')

const CompanyDatabaseSchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    }
})

module.exports = CompanyDatabase = mongoose.model('companydatabase', CompanyDatabaseSchema)
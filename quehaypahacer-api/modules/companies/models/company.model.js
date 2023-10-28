const mongoose = require('mongoose')
const { Schema } = mongoose

const CompanySchema = new Schema (
  {
    name: String,
    phone: String,
    address: String,
    contact: String,
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Company = mongoose.model('companies', CompanySchema)

module.exports = Company

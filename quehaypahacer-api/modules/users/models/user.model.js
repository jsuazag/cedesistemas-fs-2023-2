const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema (
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    phone: String,
    identification: String,
    type: {
      type: Number,
      default: 1
    },
    status: {
      type: Number,
      default: 1
    },
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('users', UserSchema)

module.exports = User

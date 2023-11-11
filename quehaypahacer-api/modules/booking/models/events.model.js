const mongoose = require('mongoose')
const { Schema } = mongoose

const EventSchema = new Schema (
  {
    price: {
      type: Number,
      required: true,
      default: 0
    },
    idCompany: {
      type: Schema.Types.ObjectId,
      ref: 'companies'
    },
    availableTickets: {
      type: Number,
      required: true
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

const Event = mongoose.model('events', EventSchema)

module.exports = Event

const moongose = require('mongoose')
const errorHandler = require('../../utils/errorHandler')
const { SERVER_ERROR, EVENT_NOT_FOUND } = require('./utils/events.dict.errors')
const Event = require('./models/event.model')

const create = async (eventData) => {
  try {
    const eventObject = Event(eventData)
    await eventObject.save()

    return {
      event: eventObject
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const getOne = async (eventId) => {
  try {
    if (!moongose.Types.ObjectId.isValid(eventId)) {
      throw errorHandler(EVENT_NOT_FOUND)
    }
    const eventObject = await Event.findById(eventId)
    if (eventObject) return eventObject
    throw errorHandler(EVENT_NOT_FOUND)
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const getAll = async (filters) => {
  try {

    const currentDate = new Date()
    const query = {
      date: {
        $gte: currentDate
      }
    }

    const events = await Event.find(query)

    return {
      events
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

module.exports = {
  create,
  getOne,
  getAll
}

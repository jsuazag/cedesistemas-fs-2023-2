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

    let events = []
    const currentDate = new Date()
    const query = {
      date: {
        $gte: currentDate
      }
    }

    if (filters.category) query.idCategory = Number(filters.category)

    if (filters.latitude && filters.longitude) {
      const userCoords = [ Number(filters.longitude), Number(filters.latitude)]
      events = await Event.aggregate([
        {
          $geoNear: {
             near: { type: "Point", coordinates: userCoords },
             distanceField: "dist.calculated",
             maxDistance: 20000,
             query: query,
             includeLocs: "dist.location",
             spherical: true
          }
        }
      ])
    } else {
      events = await Event.find(query)
    }

    return {
      events
    }

  } catch (error) {
    console.log('error ->', error)
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

module.exports = {
  create,
  getOne,
  getAll
}

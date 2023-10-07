import { useState, useEffect } from "react"

export const useCurrentPosition = () => {

  const [latitude, setLatitude] = useState (null)
  const [longitude, setLongitude] = useState (null)

  const getCurrentUserPosition = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }
  }

  useEffect (() => {
    getCurrentUserPosition ()
  }, [])

  return [latitude, longitude]

}

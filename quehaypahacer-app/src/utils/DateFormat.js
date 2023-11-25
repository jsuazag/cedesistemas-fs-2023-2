import moment from 'moment'
import 'moment/dist/locale/es';

export const dateFormat = (
    dateTimeString,
    inputFormat = "YYYY-MM-DDTHH:mm:ss",
    outputFormat = "dddd, DD MMMM [del] YYYY [a las] h:mm a",
    locale = 'es'
  ) => {
  moment.locale(locale)
  var parsedDate = moment(dateTimeString, inputFormat)
  var formattedDate = parsedDate.format(outputFormat)
  return formattedDate
}

export const currencyFormat = (value, locale = "es-CO", currency = "COP") => {
  if (isNaN(value)) {
    return "0"
  }

  const convertFormat = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0
  })
  return convertFormat.format(value)
}

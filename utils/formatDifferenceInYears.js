import { differenceInYears, parseISO } from 'date-fns'

/**
 * Calculate how many full years are between now() and startDate
 * using date-fns library
 *
 * @param {string} startDate - the earlier date
 * @returns {number} a positive integer number such as "1" or "5"
 */
const calculateYearDifference = startDate => {
  if (!startDate) {
    return null
  }

  // date-fns library don't work with strings
  // Read more: https://date-fns.org/v2.28.0/docs/differenceInYears
  const todaysDate = new Date().toISOString()
  const todaysDateISO = parseISO(todaysDate)
  const startDateISO = parseISO(startDate)

  const yearDifference = Math.abs(
    differenceInYears(startDateISO, todaysDateISO),
  )

  // date-fns library returns 'Invalid Date' message of type 'Date' on error
  return typeof yearDifference === 'number' ? yearDifference : null
}

/**
 * Generate text telling how many years have been passed from now
 *
 * @param {number} numberOfYears - positive integer number of years
 * @returns {string} difference in years
 */
const parseDateText = numberOfYears => {
  if (!numberOfYears) {
    return ''
  }

  switch (numberOfYears) {
    case 0:
      return `less than a year ago`
    case 1:
      return `${numberOfYears} year ago`
    default:
      return `${numberOfYears} years ago`
  }
}

/**
 * Format the difference in from now and startDate in human-readable text
 */
const formatDifferenceInYears = startDate => (
  parseDateText(calculateYearDifference(startDate))
)

export default formatDifferenceInYears

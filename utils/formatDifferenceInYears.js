import { differenceInYears, parseISO } from 'date-fns'

/**
 * Calculate difference in years from now() using date-fns library
 *
 * @param {string} startDate
 * @returns {number} a positive integer number such as "1" or "5"
 */
const calculateYearDifference = startDate => {
  if (!startDate) {
    return null
  }

  const todaysDate = new Date().toISOString()

  // date-fns library don't work with strings
  const todaysDateISO = parseISO(todaysDate)
  const startDateISO = parseISO(startDate)

  return Math.abs(differenceInYears(startDateISO, todaysDateISO))
}

/**
 * Generate text that tells how many years have been passed
 *
 * @param {number} numberOfYears - positive integer number of years
 * @returns {string} human-readable difference in years
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
 * Format the difference in years in human-readable text
 *
 * @param {string} startDate
 * @returns {string}
 */
const formatDifferenceInYears = startDate => (
  parseDateText(calculateYearDifference(startDate))
)

export default formatDifferenceInYears

export type InputNumberValue = string | number | null | undefined

const locale = "uz-UZ"

function validateNumber(inputValue: InputNumberValue): number | null {
  if (inputValue == null || Number.isNaN(inputValue)) return null
  return Number(inputValue)
}

/**
 * Utility functions for formatting numbers
 */
export const FormatNumber = {
  /**
   * Make number with spaces
   * @example
   * ```ts
   * FormatNumber.number(12345.678) // "12 345,68"
   * ```
   * @param {InputNumberValue} inputValue - The number or string to format.
   * @returns {string} A formatted number string, or an empty string if invalid.
   */
  number(inputValue: InputNumberValue): string {
    const number = validateNumber(inputValue)
    if (number === null) return ""

    const fm = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number)

    return fm
  },

  /**
   * Make number with percent
   * * @example
   * ```ts
   * FormatNumber.percent(25)       // "25%"
   * ```
   * @param {InputNumberValue} inputValue - The number or string to format.
   * @returns {string} A formatted number string, or an empty string if invalid.
   */
  percent(inputValue: InputNumberValue): string {
    const number = validateNumber(inputValue)
    if (number === null) return ""

    const fm = new Intl.NumberFormat(locale, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(number / 100)

    return fm
  },

  /**
   * Make shorten number
   * @example
   * ```ts
   * FormatNumber.shorten(1500000)  // "1,5 mln"
   * ```
   * @param {InputNumberValue} inputValue - The number or string to format.
   * @returns {string} A formatted number string, or an empty string if invalid.
   */
  shorten(inputValue: InputNumberValue): string {
    const number = validateNumber(inputValue)
    if (number === null) return ""

    const fm = new Intl.NumberFormat(locale, {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(number)

    return fm.replace(/[A-Z]/g, (match) => match.toLowerCase())
  },

  /**
   * Convert bytes human readable data
   * @example
   * ```ts
   * FormatNumber.data(2048)        // "2 Kb"
   * ```
   * @param {InputNumberValue} inputValue - The number or string to format.
   * @returns {string} A formatted number string, or an empty string if invalid.
   */
  data(inputValue: InputNumberValue): string {
    const number = validateNumber(inputValue)
    if (number === null || number === 0) return "0 bytes"

    const units = ["bytes", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"]
    const decimal = 2
    const baseValue = 1024

    const index = Math.floor(Math.log(number) / Math.log(baseValue))
    const fm = `${parseFloat((number / baseValue ** index).toFixed(decimal))} ${units[index]}`

    return fm
  },
}

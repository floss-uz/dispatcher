/**
 * Utility functions for data manipulation.
 */
export const Data = {
  /**
   * Checks if the provided value null or undefined and return empty string
   * @param value
   * @returns The original value if it's not null/undefined; otherwise, an empty string.
   */
  safeEmpty<T>(value: T): string | Exclude<T, null | undefined> {
    if (value === null || value === undefined) return ""
    return value as Exclude<T, null | undefined>
  },
}

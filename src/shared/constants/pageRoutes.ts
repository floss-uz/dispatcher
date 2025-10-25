/**
 *
 * @description global page route variables, starts with prefix PAGE_
 * @example export const PAGE_DASHBOARD = "/dashboard"
 */

export const PAGE_MAIN = "/"
export const PAGE_COMMUNITIES = "/communities"
export const PAGE_ADMINS = "/admins"
export const PAGE_BANNED_USERS = "/banned-users"

// remove start slash from path
export const rmSlash = (path: string): string => {
  return path.substring(1)
}

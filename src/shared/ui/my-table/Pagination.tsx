import * as React from "react"
import MuiPagination from "@mui/material/Pagination"
import {
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid"

export const Pagination = () => {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    apiRef.current.setPage(value - 1)
  }

  return (
    <MuiPagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={handlePageChange}
      shape="rounded"
      showFirstButton
      showLastButton
    />
  )
}

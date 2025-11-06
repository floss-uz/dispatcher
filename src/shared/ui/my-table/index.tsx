import { DataGrid, type DataGridProps } from "@mui/x-data-grid"
import { useTranslation } from "react-i18next"
import { Toolbar } from "@/shared/ui/my-table/Toolbar.tsx"
import { NoResultsOverlay } from "@/shared/ui/my-table/NoResultsOverlay.tsx"
import { NoRowsOverlay } from "@/shared/ui/my-table/NoRowsOverlay.tsx"
import { NoColumnsOverlay } from "@/shared/ui/my-table/NoColumnsOverlay.tsx"
import { Pagination } from "@/shared/ui/my-table/Pagination.tsx"

export interface MyTableProps extends DataGridProps {
  title?: string
}

export const MyTable = ({ title, rows, columns, ...props }: MyTableProps) => {
  const { t } = useTranslation()
  return (
    <div style={{ height: "88vh", width: "100%" }}>
      <DataGrid
        localeText={{
          toolbarExportPrint: t("general.print"),
        }}
        slotProps={{
          toolbar: {
            printOptions: {
              disableToolbarButton: true,
            },
          },
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        slots={{
          toolbar: () => Toolbar({ title }),
          pagination: Pagination,
          noResultsOverlay: NoResultsOverlay,
          noRowsOverlay: NoRowsOverlay,
          noColumnsOverlay: NoColumnsOverlay,
        }}
        rows={rows}
        columns={columns}
        columnBufferPx={100}
        {...props}
      />
    </div>
  )
}

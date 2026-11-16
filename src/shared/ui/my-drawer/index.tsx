import { useState, type ReactNode } from "react"
import { useTranslation } from "react-i18next"
import Drawer, { type DrawerProps } from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import { useDrawer } from "@/shared/hooks"
import { ConfirmCloseDialog } from "@/shared/ui/my-drawer/ConfirmCloseDialog.tsx"

export interface MyDrawerProps {
  /** unique name, used with useDrawer(name) to open and close this drawer */
  name: string
  title?: ReactNode
  children?: ReactNode
  /** called by the save button; the drawer closes when it resolves and stays open when it throws */
  onSave?: () => unknown | Promise<unknown>
  /** called when the drawer is closed without saving */
  onCancel?: () => void
  /** extra buttons, shown before cancel and save */
  actions?: ReactNode
  /** ask for confirmation before closing without saving */
  isDirty?: boolean
  saveDisabled?: boolean
  /** shows the save button as loading, in addition to the state while onSave runs */
  loading?: boolean
  closeOnSave?: boolean
  hideFooter?: boolean
  saveText?: string
  cancelText?: string
  anchor?: DrawerProps["anchor"]
  width?: number | string
}

export const MyDrawer = ({
  name,
  title,
  children,
  onSave,
  onCancel,
  actions,
  isDirty = false,
  saveDisabled = false,
  loading = false,
  closeOnSave = true,
  hideFooter = false,
  saveText,
  cancelText,
  anchor = "right",
  width = 480,
}: MyDrawerProps) => {
  const { t } = useTranslation()
  const { isOpen, close } = useDrawer(name)
  const [submitting, setSubmitting] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const busy = submitting || loading

  const discard = () => {
    setConfirmOpen(false)
    onCancel?.()
    close()
  }

  const requestClose = () => {
    if (busy) return
    if (isDirty) {
      setConfirmOpen(true)
      return
    }
    discard()
  }

  const handleSave = async () => {
    if (!onSave) return
    setSubmitting(true)
    try {
      await onSave()
      if (closeOnSave) close()
    } catch {
      // keep the drawer open, onSave is responsible for showing the error
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Drawer anchor={anchor} open={isOpen} onClose={requestClose}>
        <Box
          sx={{
            width: anchor === "left" || anchor === "right" ? { xs: "100vw", sm: width } : "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, py: 1.5 }}>
            <Typography variant="h6" sx={{ flex: 1 }} noWrap>
              {title}
            </Typography>
            <IconButton aria-label={t("drawer.close")} onClick={requestClose} disabled={busy}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>{children}</Box>
          {!hideFooter && (
            <>
              <Divider />
              <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ px: 2, py: 1.5 }}>
                {actions}
                <Button onClick={requestClose} disabled={busy}>
                  {cancelText ?? t("drawer.cancel")}
                </Button>
                {onSave && (
                  <Button
                    variant="contained"
                    onClick={handleSave}
                    loading={busy}
                    disabled={saveDisabled}
                  >
                    {saveText ?? t("drawer.save")}
                  </Button>
                )}
              </Stack>
            </>
          )}
        </Box>
      </Drawer>
      <ConfirmCloseDialog
        open={confirmOpen}
        onKeepEditing={() => setConfirmOpen(false)}
        onDiscard={discard}
      />
    </>
  )
}

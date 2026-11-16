import { useTranslation } from "react-i18next"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"

interface ConfirmCloseDialogProps {
  open: boolean
  onKeepEditing: () => void
  onDiscard: () => void
}

export const ConfirmCloseDialog = ({ open, onKeepEditing, onDiscard }: ConfirmCloseDialogProps) => {
  const { t } = useTranslation()
  return (
    <Dialog open={open} onClose={onKeepEditing}>
      <DialogTitle>{t("drawer.discardTitle")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t("drawer.discardText")}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onKeepEditing} autoFocus>
          {t("drawer.keepEditing")}
        </Button>
        <Button color="error" onClick={onDiscard}>
          {t("drawer.discard")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

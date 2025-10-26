import { Outlet } from "react-router"
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout"
import { Box, Button, Container, Divider, Stack } from "@mui/material"
import { Account } from "@toolpad/core/Account"

export default function Layout() {
  return (
    <DashboardLayout
      slots={{
        toolbarActions: ToolbarActions,
      }}
    >
      <Container sx={{ my: 2 }}>
        <Box sx={{ mt: 1 }}>
          <Outlet />
        </Box>
      </Container>
    </DashboardLayout>
  )
}

export const ToolbarActions = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
      <ThemeSwitcher />
      <Account
        slots={{
          popoverContent: () => <Button variant={"contained"}>Chiqish</Button>,
        }}
      />
    </Stack>
  )
}

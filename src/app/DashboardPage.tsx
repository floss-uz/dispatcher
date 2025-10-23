import { Button, useColorScheme } from "@mui/material";

export const DashboardPage = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <div>
      uy! {JSON.stringify(mode)}
      <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        Hello world
      </Button>
    </div>
  );
};

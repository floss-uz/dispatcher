import { Button, useColorScheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const DashboardPage = () => {
  // theme
  const { mode, setMode } = useColorScheme();

  // translate
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "uz" : "en");
  };

  return (
    <div>
      uy! {JSON.stringify(mode)}
      <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        Hello world
      </Button>
      <h1>{t("name")}</h1>
      <p>til: {i18n.language}</p>
      <Button onClick={toggleLang}>change</Button>
    </div>
  );
};

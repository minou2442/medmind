import { useTranslation } from "react-i18next";
import { Button } from "./button";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => i18n.changeLanguage(lang.code)}
          className={lang.code === "ar" ? "font-arabic" : ""}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
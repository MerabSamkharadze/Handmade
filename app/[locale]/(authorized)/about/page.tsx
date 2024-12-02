import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const t = useTranslations("HomePage");
  return <div>{t("title")}</div>;
}

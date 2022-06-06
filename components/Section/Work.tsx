import Section from "components/Templates/Section";
import React from "react";

type WorkSectionProps = {
  t: any;
};

export default function Work({ t }: WorkSectionProps) {
  return (
    <Section title={t("work.title")} className="mt-16" id="work">
      <p className="mt-4">
        {t("work.subtitle1")}
        <br />
        {t("work.subtitle2")}
      </p>
    </Section>
  );
}

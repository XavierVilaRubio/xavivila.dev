import Section from "components/Templates/Section";
import React from "react";

type ResumeSectionProps = {
  t: any;
};

const Resume = ({ t }: ResumeSectionProps) => {
  return (
    <Section title={t("resume.title")} className="mt-16" id="resume">
      <p className="mt-4">{t("resume.subtitle")}</p>
    </Section>
  );
};

export default Resume;

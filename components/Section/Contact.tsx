import Section from "components/Templates/Section";
import React from "react";

type ContactSectionProps = {
  t: any;
};

const Contact = ({ t }: ContactSectionProps) => {
  return (
    <Section title={t("contact.title")} className="mt-16" id="contact">
      <p className="mt-4">
        {t("contact.subtitle1")}
        <br />
        {t("contact.subtitle2")}
      </p>
    </Section>
  );
};

export default Contact;

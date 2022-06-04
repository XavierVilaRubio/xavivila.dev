import Section from "components/Templates/Section";
import React from "react";

type WorkSectionProps = {};

export default function Work({}: WorkSectionProps) {
  return (
    <Section title="Work" className="mt-16" id="work">
      <p>
        Check my commercial and non commercial projects. If you have any
        questions feel free to ask me for more information.
      </p>
    </Section>
  );
}

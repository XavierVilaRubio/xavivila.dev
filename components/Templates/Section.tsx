import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id: string;
};

function Section({ title, children, className, id }: SectionProps) {
  return (
    <section className={`text-center px-4 ${className} section`} id={id}>
      <h3 className="text-4xl font-extrabold">{title}</h3>
      {children}
    </section>
  );
}

export default Section;

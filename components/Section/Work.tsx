import EyeIcon from "components/Icons/EyeIcon";
import Section from "components/Templates/Section";
import React from "react";

type WorkSectionProps = {
  t: any;
};

const Card = () => {
  return (
    <>
      <div className="block overflow-hidden text-left h-fit">
        <div>
          <img
            className="object-cover object-top w-full h-56 border border-gray-100 shadow-sm rounded-xl"
            src="https://cdn.dribbble.com/users/1587856/screenshots/3813441/estimatr_final.png"
            alt=""
          />
        </div>

        <div className="p-6">
          <h5 className="text-xl font-black">CalcApp</h5>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <a href="#" className="flex">
              <EyeIcon />
              Preview
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Work = ({ t }: WorkSectionProps) => {
  return (
    <Section title={t("work.title")} className="mt-16" id="work">
      <p className="mt-4">
        {t("work.subtitle1")}
        <br />
        {t("work.subtitle2")}
      </p>
      <div className="columns-4">
        <Card />
      </div>
    </Section>
  );
};

export default Work;

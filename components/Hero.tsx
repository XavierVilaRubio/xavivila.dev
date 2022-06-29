import React from "react";
import Image from "next/image";
import xavi from "public/xavi.png";
import CustomButton from "./CustomButton";

type Props = {
  t: any;
};

const Hero = ({ t }: Props) => {
  return (
    <>
      <div
        className="flex flex-col items-center flex-grow max-w-4xl mx-auto sm:mt-8 max-h-max sm:flex-row sm:gap-4"
        id="hero"
      >
        <div className="relative w-screen h-full imageContainer">
          <Image
            src={xavi}
            alt="Xavier Vila photo"
            layout="raw"
            priority={true}
            className="absolute left-0 right-0 w-auto max-h-full mx-auto"
          />
        </div>
        <div className="px-4 mt-6 text-center sm:text-left sm:my-0 sm:w-3/5 sm:px-0">
          <h1 className="px-4 text-3xl font-semibold sm:font-extrabold sm:px-0 sm:text-4xl md:text-5xl title">
            {t("hero.headline.main")} <span>{t("hero.headline.span")}</span>.
          </h1>
          <p className="mt-4 ">{t("hero.subtext")}</p>
          <div className="flex flex-row gap-4 mt-6 sm:w-4/5">
            <CustomButton
              label={t("hero.contact_button")}
              fill={true}
              href="#contact"
            />
            <CustomButton
              label={t("hero.work_button")}
              fill={false}
              href="#work"
              className="font-normal"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .title > span {
          position: relative;
          z-index: -1;
          color: white;
          background-color: black;
          white-space: nowrap;

          // -webkit-clip-path: inset(21% -1% -1% -1%);
          // clip-path: inset(21% 0% 0% 0%);
        }

        .imageContainer {
          // max-width: 30vh;
        }

        // .imageContainer::before {
        //   content: "";
        //   position: absolute;
        //   width: 13rem;
        //   height: 13rem;

        //   background-color: #fbfbfb;
        //   opacity: 1;
        //   background-image: radial-gradient(#444cf7 1.8px, transparent 1.8px),
        //     radial-gradient(#444cf7 1.8px, #fbfbfb 1.8px);
        //   background-size: 40px 40px;
        //   background-position: 0 0, 20px 20px;
        // }
      `}</style>
    </>
  );
};

export default Hero;

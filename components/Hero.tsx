import React from "react";
import Image from "next/image";
import xavi from "public/xavi.png";
import CustomButton from "./CustomButton";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div
        className="flex flex-col items-center max-w-4xl mx-auto mt-8 sm:flex-row sm:gap-4"
        id="hero"
      >
        <div className="w-2/5 imageContainer">
          <Image src={xavi} alt="Xavier Vila photo" layout="raw" />
        </div>
        <div className="px-4 mt-6 text-center sm:text-left sm:my-0 sm:w-3/5 sm:px-0">
          <h1 className="px-4 text-3xl font-semibold sm:font-extrabold sm:px-0 sm:text-5xl title">
            Hi, I&rsquo;m Xavi and I&rsquo;m a <span>Junior Web Developer</span>
            .
          </h1>
          <p className="mt-4 ">
            I&rsquo;m a Junior Web Developer based in Igualada, Barcelona. I
            have 1 year of commercial experience and I specialize in frontend
            development. I am open for new opportunities and interesting
            projects.
          </p>
          <div className="flex flex-row gap-4 mt-6">
            <CustomButton label="Contact me" fill={true} href="#contact" />
            <CustomButton label="Check my work" fill={false} href="#work" />
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

          -webkit-clip-path: inset(21% -1% -1% -1%);
          clip-path: inset(21% 0% 0% 0%);
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
      {/* background-color: #fbfbfb; opacity: 1; background-image:
      radial-gradient(#444cf7 1.3px, transparent 1.3px), radial-gradient(#444cf7
      1.3px, #fbfbfb 1.3px); background-size: 52px 52px; background-position: 0
      0, 26px 26px; */}
      {/* background-image: radial-gradient(#212121 2px, transparent 2px),
      radial-gradient(#212121 3px, transparent 3px); background-position: 0 0,
      10px, 10px; background-size: 21px 21px; */}
    </>
  );
}

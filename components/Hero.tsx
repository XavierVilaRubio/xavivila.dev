import React from "react";
import Image from "next/image";
import xavi from "public/xavi.png";
import CustomButton from "./CustomButton";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto sm:flex-row sm:gap-4">
      <div className="w-2/5">
        <Image src={xavi} alt="Xavier Vila photo" layout="responsive" />
      </div>
      <div className="px-4 mt-6 text-center sm:text-left sm:my-0 sm:w-3/5 sm:px-0">
        <h1 className="px-4 text-3xl font-semibold sm:font-extrabold sm:px-0 sm:text-5xl">
          Hi, I&rsquo;m Xavi and I&rsquo;m a Junior Web Developer.
        </h1>
        <p className="mt-4 ">
          I&rsquo;m a Junior Web Developer based in Igualada, Barcelona. I have
          1 year of commercial experience and I specialize in frontend
          development. I am open for new opportunities and interesting projects.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <CustomButton label="Contact me" fill={true} href="#contact" />
          <CustomButton label="Check my work" fill={false} href="#work" />
        </div>
      </div>
    </div>
  );
}

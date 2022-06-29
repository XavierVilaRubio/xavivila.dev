import Image from "next/image";
import React, { useEffect } from "react";
import logo from "public/logo.svg";
import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";
import HamburgerIcon from "./Icons/HamburgerIcon";
import Link from "next/link";

type Props = {
  t: any;
};

const Header = ({ t }: Props) => {
  const [query] = useLanguageQuery();

  const navRef: React.RefObject<HTMLInputElement> = React.createRef();

  useEffect(() => {
    const headerHeight: number | undefined =
      document.getElementById("header")?.offsetHeight;
    document.documentElement.style.setProperty(
      "scroll-padding-block-start",
      headerHeight + "px"
    );

    const heroHeight: number =
      document.getElementById("hero")?.offsetHeight || 500;

    window.onscroll = () => {
      let scrollPos: number =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrollPos += 200;
      console.log(scrollPos);
      const sections: NodeListOf<HTMLElement> =
        document.querySelectorAll(".section");
      var sectionsArray = Array.prototype.slice.call(sections, 0);
      const anchors = sectionsArray.map((s) => {
        return document.querySelectorAll(`a[href*=${s.id}]`)[0];
      });
      const anchorsReversed = anchors.reverse();

      let found = false;
      const scrolled = sectionsArray.map((s) => {
        return s.offsetTop <= scrollPos;
      });
      console.log(scrolled);
      scrolled.reverse().forEach((s, i) => {
        if (s && !found) {
          found = true;
          anchorsReversed[i].classList.add("active", "text-black");
          anchorsReversed[i].classList.remove("text-gray-500");
        } else {
          anchorsReversed[i].classList.remove("active", "text-black");
          anchorsReversed[i].classList.add("text-gray-500");
        }
      });
    };
  }, []);

  return (
    <header
      className="sticky top-0 flex flex-col items-center justify-between px-4 bg-white sm:flex-row"
      id="header"
    >
      <div className="flex items-center justify-between w-full py-8 sm:w-fit">
        <Link href={{ query: query }}>
          <Image src={logo} alt="Xavier Vila logo" height={26} width={50} />
        </Link>
        <button
          className="align-middle sm:hidden h-fit"
          onClick={() => {
            navRef.current?.classList.toggle("max-h-44");
            navRef.current?.classList.toggle("max-h-0");
          }}
        >
          <HamburgerIcon />
        </button>
      </div>
      <nav
        ref={navRef}
        className="flex flex-col gap-4 overflow-hidden text-center transition-[max-height] ease-out duration-500 max-h-0 sm:flex-row sm:contents"
      >
        <ul
          className="flex flex-col gap-4 pt-4 transition sm:pt-0 sm:flex-row sm:gap-8"
          id="navLinks"
        >
          <li>
            <a
              className="font-semibold text-gray-500 hover:text-gray-600"
              href="#work"
            >
              {t("work.title")}
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-gray-500 hover:text-gray-600"
              href="#resume"
            >
              {t("resume.title")}
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-gray-500 hover:text-gray-600"
              href="#contact"
            >
              {t("contact.title")}
            </a>
          </li>
        </ul>
        <div className="pb-4 sm:pb-0">
          <p className="text-sm ">
            {query?.lang === "en" ? (
              <LanguageSwitcher lang="es">🇪🇸</LanguageSwitcher>
            ) : (
              <LanguageSwitcher lang="en">🇺🇸</LanguageSwitcher>
            )}
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

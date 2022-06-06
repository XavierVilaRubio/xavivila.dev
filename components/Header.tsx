import Image from "next/image";
import React, { useEffect } from "react";
import logo from "public/logo.svg";
import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";

type Props = {
  t: any;
};

function Header({ t }: Props) {
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
      let scrollPos: PropertyKey =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrollPos += 100;
      const sections: NodeListOf<HTMLElement> =
        document.querySelectorAll(".section");

      for (let s in sections) {
        if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
          document
            .querySelector(".active")
            ?.classList.remove("active", "font-semibold");
          const anchor: HTMLElement | null = document.querySelector(
            `a[href*=${sections[s].id}]`
          );
          if (anchor?.parentElement != null) {
            anchor?.parentElement.classList.add("active", "font-semibold");
          }
        }
        if (scrollPos - 100 <= heroHeight)
          document
            .querySelector(".active")
            ?.classList.remove("active", "font-semibold");
      }
    };
  }, []);

  return (
    <header
      className="sticky top-0 flex flex-col items-center justify-between px-4 bg-white sm:flex-row"
      id="header"
    >
      <div className="flex items-center justify-between w-full py-8 sm:w-fit">
        <Image src={logo} alt="Xavier Vila logo" height={26} width={50} />
        <button
          className="align-middle sm:hidden h-fit"
          onClick={() => {
            navRef.current?.classList.toggle("max-h-44");
            navRef.current?.classList.toggle("max-h-0");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
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
            <a href="#work">{t("work.title")}</a>
          </li>
          <li>
            <a href="#resume">{t("resume.title")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact.title")}</a>
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
}

export default Header;

import Image from "next/image";
import React from "react";
import logo from "public/logo.svg";

type Props = {};

function Header({}: Props) {
  const navRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <>
      <header className="sticky top-0 flex flex-col items-center justify-between px-4 bg-white sm:flex-row">
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
          <ul className="flex flex-col gap-4 pt-4 transition sm:pt-0 sm:flex-row sm:gap-8">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="pb-4 sm:pb-0">
            <p className="text-sm">ENG</p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

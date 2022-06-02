import React from "react";

type Props = {};

function Header({}: Props) {
  const navRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <>
      <header className="flex flex-col items-center justify-between px-4 py-2 sm:flex-row">
        <div className="flex items-center justify-between w-full sm:w-fit">
          <p className="py-2 text-4xl font-extrabold">XV</p>
          <button
            className="align-middle sm:hidden h-fit"
            onClick={() => {
              navRef.current?.classList.toggle("max-h-44");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav
          ref={navRef}
          className="flex flex-col gap-4 overflow-hidden text-center transition-[max-height] ease-out duration-500 max-h-0 sm:flex-row sm:contents"
        >
          <ul className="flex flex-col gap-4 transition sm:flex-row sm:gap-8">
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
          <div className="">
            <p className="text-sm">ENG</p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

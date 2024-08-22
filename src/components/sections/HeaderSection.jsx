import { NavbarItem } from "../details/NavbarItem";
import { HamburgerIcon, MoonIcon, SunIcon } from "../svg";

export const HeaderSection = ({ isDark, handleMenu }) => {
  return (
    <div className="w-full flex justify-center border-b-[var(--gray-600)]  md:border-none bg-[var(--gray-100)]">
      <div className="container flex justify-between p-4 ">
        <div className="font-normal text-3xl text-[var(--gray-950)] ">
          Lightman
        </div>
        <div className="flex">
          <div className="sm:flex md:hidden">
            <button onClick={handleMenu}>
              <HamburgerIcon />
            </button>
          </div>
          <div className="hidden md:flex gap-4 pr-4 border-r-2 border-[var(--gray-50)]">
            <NavbarItem title="About" id="about" />
            <NavbarItem title="Skills" id="skills" />
            <NavbarItem title="Work" id="work" />
            <NavbarItem title="Contact" id="contact" />
          </div>
          <div className="hidden md:flex">
            <label for="check">{isDark ? <MoonIcon /> : <SunIcon />}</label>
          </div>
          <div className="hidden md:flex bg-[var(--gray-950)] px-4 justify-center items-center ml-4 rounded-xl font-medium text-lg text-[var(--gray-50)]">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};

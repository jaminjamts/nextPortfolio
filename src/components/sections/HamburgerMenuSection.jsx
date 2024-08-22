import { NavbarItem } from "../details/NavbarItem";
import { CrossIcon, MoonIcon, SunIcon } from "../svg";

export const HamburgerMenuSection = ({ isDark, handleMenu }) => {
  return (
    <main className="w-full h-screen absolute top-0 flex-col border-b-[var(--gray-600)] border md:border-none bg-[var(--gray-100)] md:hidden">
      <div className="w-full flex flex-col ">
        <div className="flex w-full border-b justify-between border-[var(--gray-800) px-5">
          <div className=" font-normal text-3xl text-[var(--gray-950)] py-5 ">
            Lightman
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleMenu}>
              <CrossIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 px-5 py-5 border-b border-[var(--gray-800)]">
            <NavbarItem title="About" />
            <NavbarItem title="Work" />
            <NavbarItem title="Testimonails" />
            <NavbarItem title="Contact" />
          </div>
          <div className="flex flex-col gap-4 px-5">
            <label for="check" className="flex justify-between mt-4">
              <div className="text-[var(--gray-800)]">Switch Theme</div>
              {isDark ? <MoonIcon /> : <SunIcon />}
            </label>
            <div className="flex bg-[var(--gray-950)] justify-center items-center rounded-xl font-medium text-lg text-[var(--gray-50)]">
              <div className="flex">Download CV</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

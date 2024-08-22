import { useState } from "react";
import {
  NavbarFunction,
  ToggleFunction,
} from "@/components/accessibility/ToggleFunction";
import {
  AboutMeSection,
  ExperienceSection,
  FooterSection,
  GetTouchSection,
  HamburgerMenuSection,
  HeaderSection,
  HeroSection,
  SkillsSection,
  WorkSection,
} from "@/components/sections";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isShow, setIsShow] = useState(true);

  const changeColor = () => {
    setIsDark(!isDark);
  };

  const changeMenu = () => {
    setIsShow(!isShow);
    console.log("a");
  };

  return (
    <main data-theme={isDark ? "dark" : "light"}>
      <ToggleFunction handleChange={changeColor} />
      {isShow ? (
        <div>
          <div className="w-full h-screen md:h-min">
            <HeaderSection isDark={isDark} handleMenu={changeMenu} />
            <HeroSection id="heroSection" />
          </div>
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <WorkSection />
          <GetTouchSection />
          <FooterSection />
        </div>
      ) : (
        <HamburgerMenuSection isDark={isDark} handleMenu={changeMenu} />
      )}
    </main>
  );
}

import { DotIcon, FigmaIcon, GitIcon, LocationIcon, TwitterIcon } from "../svg";

export const HeroSection = () => {
  return (
    <div className="w-full  h-[90%] md:h-min py-4 flex justify-center bg-[var(--gray-100)]">
      <div className="container h-full flex flex-col items-center py-8 px-4 gap-4 md:flex-row-reverse md:px-8">
        <div className="flex justify-center items-center h-[50vh] md:w-[50vw] min-w-80 border"></div>
        <div className="flex flex-col gap-10 md:w-[50vw]">
          <div className="flex flex-col gap-2">
            <div className="text-3xl flex text-[var(--gray-800)]">
              Hi, I’m Lightman 👋
            </div>
            <div className="text-justify text-[var(--gray-600)]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </div>
          </div>
          <div>
            <p className="flex gap-x-2 text-[var(--gray-600)]">
              <LocationIcon />
              Ulaanbaatar, Mongolia
            </p>

            <p className="flex gap-x-2 text-[var(--gray-600)]">
              <DotIcon />
              Available for new projects
            </p>
          </div>
          <div className="flex gap-x-2">
            <GitIcon />
            <TwitterIcon />
            <FigmaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

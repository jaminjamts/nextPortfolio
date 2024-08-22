import { ExperienceCardDetail } from "../details/ExperienceCardDetail";
import { SectionHeadDetail } from "../details/SectionHeadDetail";
import { UpworkIcon } from "../svg";

export const ExperienceSection = () => {
  return (
    <main className="w-full flex flex-col items-center bg-[var(--gray-200)] ">
      <div className="container py-8 px-4 flex flex-col  gap-4">
        <div className="flex justify-center">
          <SectionHeadDetail title="Experience" />
        </div>
        <div className="flex justify-center text-center text-lg text-[var(--gray-800)]">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div>
          <ExperienceCardDetail
            logo={<UpworkIcon />}
            year="Nov 2021 - Present"
            position="Sr.Frontend Developer"
            doing="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </div>
        <div>
          <ExperienceCardDetail
            logo={<UpworkIcon />}
            year="Nov 2021 - Present"
            position="Sr.Frontend Developer"
            doing="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </div>
        <div>
          <ExperienceCardDetail
            logo={<UpworkIcon />}
            year="Nov 2021 - Present"
            position="Sr.Frontend Developer"
            doing="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </main>
  );
};

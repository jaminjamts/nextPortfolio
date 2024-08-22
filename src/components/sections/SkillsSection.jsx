import { SectionHeadDetail } from "../details/SectionHeadDetail";
import { SkillDetail } from "../details/SkillDetail";
import {
  CypressIcon,
  ExpressJsIcon,
  FigmaColorIcon,
  GitColorIcon,
  JsIcon,
  MongoDbIcon,
  NestJsIcon,
  NextIcon,
  NodeJsIcon,
  ReactIcon,
  SassIcon,
  SocketIoIcon,
  StorybookIcon,
  TailwindIcon,
  TsIcon,
} from "../svg";

export const SkillsSection = () => {
  return (
    <main
      className="w-full flex flex-col  items-center bg-[var(--gray-100)] "
      id="skills"
    >
      <div className="container px-4 py-8 flex flex-col gap-8">
        <div className="flex justify-center">
          <SectionHeadDetail title="Skills" />
        </div>
        <div className="flex justify-center text-center text-lg text-[var(--gray-500)]">
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div
          className="flex flex-wrap gap-3 justify-between   md:grid md:grid-cols-8 md:grid-rows-2
        "
        >
          <SkillDetail logo={<JsIcon />} title="Javascript" />
          <SkillDetail logo={<TsIcon />} title="Typescript" />
          <SkillDetail logo={<ReactIcon />} title="React" />
          <SkillDetail logo={<NextIcon />} title="Next.js" />
          <SkillDetail logo={<NodeJsIcon />} title="Node.js" />
          <SkillDetail logo={<ExpressJsIcon />} title="Express.js" />
          <SkillDetail logo={<NestJsIcon />} title="Nest.js" />
          <SkillDetail logo={<SocketIoIcon />} title="Socket.io" />
          <SkillDetail logo={<MongoDbIcon />} title="MongoDB" />
          <SkillDetail logo={<SassIcon />} title="Sass/Scss" />{" "}
          <SkillDetail logo={<TailwindIcon />} title="TailwindCSS" />
          <SkillDetail logo={<FigmaColorIcon />} title="Figma" />
          <SkillDetail logo={<CypressIcon />} title="Cypress" />
          <SkillDetail logo={<StorybookIcon />} title="Storybook" />
          <SkillDetail logo={<GitColorIcon />} title="Git" />
          <SkillDetail title="PostgreSQL" />
        </div>
      </div>
    </main>
  );
};

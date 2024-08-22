import { SectionHeadDetail } from "./SectionHeadDetail";

export const WorkTextDetail = (props) => {
  const { title, textSection, usedProgram } = props;
  return (
    <main className="flex flex-col gap-4 md:w-[35vw]">
      <div className="font-semibold text-[var(--gray-800)]">UB CAB</div>
      <div className="text-[var(--gray-600)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti
        saepe unde, non adipisci maxime, at similique dicta odit aliquam eum
        laborum modi? Quidem tempora et quaerat doloremque pariatur ratione.
      </div>
      <div className="flex flex-wrap gap-1 ">
        <SectionHeadDetail title="React" />
        <SectionHeadDetail title="Next.js" />
        <SectionHeadDetail title="TypeScript" />
        <SectionHeadDetail title="Nest.js" />
        <SectionHeadDetail title="PostgreSQL" />
        <SectionHeadDetail title="Tailwindcss" />
        <SectionHeadDetail title="Figma" />
        <SectionHeadDetail title="Cypress" />
        <SectionHeadDetail title="Storybook" />
        <SectionHeadDetail title="Git" />
      </div>
    </main>
  );
};

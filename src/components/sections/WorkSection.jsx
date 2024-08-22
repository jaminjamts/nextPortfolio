import { SectionHeadDetail } from "../details/SectionHeadDetail";
import { WorkImageDetail } from "../details/WorkImageDetail";
import { WorkTextDetail } from "../details/WorkTextDetail";

export const WorkSection = () => {
  return (
    <main
      className="w-full flex flex-col items-center bg-[var(--gray-100)]"
      id="work"
    >
      <div className="container py-8 px-8 flex flex-col gap-4">
        <div className="flex justify-center">
          <SectionHeadDetail title="Work" />
        </div>
        <div className="flex justify-center text-center text-lg text-[var(--gray-100)]">
          <p> Some of the noteworthy projects I have built:</p>
        </div>
        <div className="flex flex-col justify-center px-4 py-8 h-in shadow-xl rounded-xl md:rounded-l-xl md:flex-row ">
          <div className="md:rounded-l-lg bg-[var(--gray-300)] md:p-12 md:w-1/2 rounded-t-xl">
            <WorkImageDetail />
          </div>
          <div className="md:rounded-r-lg bg-[var(--gray-400)] md:p-12 md:w-1/2 rounded-b-xl p-8">
            <WorkTextDetail />
          </div>
        </div>
        <div
          className="w-full flex flex-col
         justify-center px-4 py-8 h-in shadow-xl rounded-xl md:flex-row-reverse"
        >
          <div className="md:rounded-r-lg bg-[var(--gray-300)] md:p-12 md:w-1/2 rounded-t-xl">
            <WorkImageDetail />
          </div>
          <div className="md:rounded-l-lg bg-[var(--gray-400)] md:p-12 md:w-1/2 rounded-b-xl p-8">
            <WorkTextDetail />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center px-4 py-8 h-min shadow-xl rounded-xl md:flex-row">
          <div className="md:rounded-l-lg bg-[var(--gray-300)] md:p-12 md:w-1/2 rounded-t-xl">
            <WorkImageDetail />
          </div>
          <div className="md:rounded-r-lg bg-[var(--gray-400)] md:p-12 md:w-1/2 rounded-b-xl p-8">
            <WorkTextDetail />
          </div>
        </div>
      </div>
    </main>
  );
};

export const ExperienceCardDetail = (props) => {
  const { logo, year, position, doing } = props;
  return (
    <main className="md:mx-24  xl:mx-72 flex flex-col p-9 rounded-xl bg-[var(--gray-default)] shadow-xl ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-4 items-end py-6 border-b-2 border-[var(--gray-300)] ">
          <div className="">{logo}</div>
          <div className="text-[16px]  font-semibold text-[var(--gray-950)] ">
            {year}
          </div>
        </div>
        <div className="">
          <div className="text-lg font-bold text-[var(--gray-800)]">
            {position}
          </div>
          <ul className="list-disc pl-4 md:pl-0 py-8 flex flex-col gap-1">
            <li className="text-[16px] text-[var(--gray-500)] list-inside text-justify">
              {doing}
            </li>
            <li className="text-[16px] text-[var(--gray-500)] list-inside text-justify">
              {doing}
            </li>
            <li className="text-[16px] text-[var(--gray-500)] list-inside text-justify">
              {doing}
            </li>
            <li className="text-[16px] text-[var(--gray-500)] list-inside text-justify">
              {doing}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

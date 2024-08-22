export const SkillDetail = (props) => {
  const { logo, title } = props;
  return (
    <main className="flex flex-col text-center justify-around">
      <div className="flex justify-center ">{logo}</div>
      <div className="text-[16px] text-center text-[var(--gray-500)]">
        {title}
      </div>
    </main>
  );
};

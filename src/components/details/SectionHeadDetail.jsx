export const SectionHeadDetail = (props) => {
  const { title } = props;
  return (
    <div>
      <p className="bg-[var(--gray-300)] px-5 py-1 rounded-xl text-[var(--gray-950)] text-base">
        {title}
      </p>
    </div>
  );
};

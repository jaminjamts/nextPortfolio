import { CopyRightIcon } from "../svg";

export const FooterSection = () => {
  return (
    <main className="w-full py-8 px-4 flex justify-center items-center bg-[var(--gray-100)]">
      <div
        className="container flex justify-center gap-2
      "
      >
        <div className="flex items-center justify-center text-[var(--gray-400)]">
          <CopyRightIcon />
        </div>
        <div className="text-[var(--gray-950)]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </div>
      </div>
    </main>
  );
};

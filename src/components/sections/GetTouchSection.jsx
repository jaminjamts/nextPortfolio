import { SectionHeadDetail } from "../details/SectionHeadDetail";
import {
  CopyIcon,
  FigmaIcon,
  GitIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../svg";

export const GetTouchSection = () => {
  return (
    <main
      className="w-full px-4 py-8 flex justify-center bg-[var(--gray-200)] text-[var(--gray-600)] text-center"
      id="contact"
    >
      <div className="container flex flex-col items-center gap-4">
        <div className="flex">
          <SectionHeadDetail title="Get in touch" />
        </div>
        <div className="flex items-center flex-col text-center gap-4">
          <div className="text-xl">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
          <div className="text-lg font-semibold">
            <div className="flex gap-2 ">
              <MailIcon />
              <div>lorem@gmail.com</div>
              <CopyIcon />
            </div>
            <div className="flex gap-2 ">
              <PhoneIcon />
              <div>+976 80060793</div>
              <CopyIcon />
            </div>
          </div>
        </div>
        <p>You may also find me on these platforms!</p>
        <div className="flex gap-2">
          <GitIcon />
          <TwitterIcon />
          <FigmaIcon />
        </div>
      </div>
    </main>
  );
};

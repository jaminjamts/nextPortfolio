import { SectionHeadDetail } from "../details/SectionHeadDetail";

export const AboutMeSection = () => {
  return (
    <main
      className="w-full bg-[var(--gray-200)] flex flex-col items-center"
      id="about"
    >
      <div className="container px-4 py-8 flex flex-col gap-6 ">
        <div className="flex justify-center items-center">
          <SectionHeadDetail title="About me" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="h-[50vh] border min-w-min md:w-1/2 "></div>
          <div className="flex flex-col gap-6 md:w-1/2">
            <p className="flex text-2xl text-[var(--gray-900)] font-black">
              Curious about me? Here you have it:
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-justify text-[var(--gray-500)]">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="text-[16px] text-justify text-[var(--gray-500)]">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="text-[16px] text-justify text-[var(--gray-500)]">
                Finally, some quick bits about me
              </p>
              <ul className="text-[16px] text-[var(--gray-500)] list-disc list-inside columns-2">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
                <li>Avid learner</li>
              </ul>
              <p className="text-[16px] text-justify text-[var(--gray-500)]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

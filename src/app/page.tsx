import ScrambleCombined from "@/components/scramble-combined";
import ScrambleIn from "@/components/scramble-in";
import ScrambleCombinedPair from "@/components/scramble-combined-pair";
import { experiences, projects, socials } from "@/data/content";
import Star from "@/components/star";

const ROW_DELAY = 30;
const SCRAMBLE_SPEED = 30;
const SCRAMBLED_LETTER_COUNT = 5;

const getAnimationDuration = (text: string) => {
  return Math.min((text.length - SCRAMBLED_LETTER_COUNT) * SCRAMBLE_SPEED, 100);
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black px-4 pt-10 sm:px-2 sm:pt-10 md:pt-10 lg:pt-12 md:p-10 lg:p-12 font-normal text-[4vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
      <div>
      <div className="relative max-w-screen-2xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">

        {/* Header - Row 1 */}
        <div className="flex mb-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="w-[30%]  text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-[22%]">
            <h1>
              <ScrambleCombined
                delay={0}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
              >
                daniel petho
              </ScrambleCombined>
            </h1>
          </div>
          <div className="">
            <h1>
              <ScrambleIn
                delay={getAnimationDuration("daniel petho")}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
              >
                design ✺ tech ∿ build ◳
              </ScrambleIn>
            </h1>
            <a
              href="https://nand.io"
              target="_blank"
              className="cursor-pointer border-b-2 border-transparent hover:border-foreground pb-1"
            >
              <ScrambleCombined
                delay={getAnimationDuration("daniel petho") + ROW_DELAY}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
              >
                design engineer @ studio nand
              </ScrambleCombined>
            </a>
            
          </div>
          
        </div>

        {/* Previous Experience */}
        <div className="flex">
          <h2 className="w-[30%] text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-[22%]">
            <ScrambleIn
              delay={ROW_DELAY * 3}
              scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
              scrambleSpeed={SCRAMBLE_SPEED}
            >
              prev
            </ScrambleIn>
          </h2>
          <div className="flex-1">
            {experiences.map((exp, index) => (
              <a
                href={exp.links}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <ScrambleCombinedPair
                  key={index}
                  leftText={exp.title}
                  rightText={exp.year}
                  delay={
                    ROW_DELAY * 3 +
                    getAnimationDuration("daniel petho") +
                    ROW_DELAY * index
                  }
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                  containerClassName="group justify-between transition-colors border-b-2 md:hover:border-foreground border-b-transparent cursor-pointer py-0 md:py-0.5 lg:py-1"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="flex">
          <h2 className="w-[30%] text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-[22%]">
            <ScrambleIn
              delay={ROW_DELAY * 7}
              scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
              scrambleSpeed={SCRAMBLE_SPEED}
            >
              projects
            </ScrambleIn>
          </h2>
          <ul className="flex-1">
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ScrambleCombinedPair
                    key={index}
                    leftText={project.title}
                    rightText={project.year}
                    delay={
                      ROW_DELAY * 7 +
                      getAnimationDuration("daniel petho") +
                      ROW_DELAY * index
                    }
                    img={project.img}
                    imgAlt={`${project.title} project thumbnail`}
                    showImage={true}
                    scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                    scrambleSpeed={SCRAMBLE_SPEED}
                    containerClassName="group justify-between transition-colors border-b-2 md:hover:border-foreground border-b-transparent cursor-pointer py-0 md:py-0.5 lg:py-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex">
          <h2 className="w-[30%] text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-[22%]">
            <ScrambleIn
              delay={ROW_DELAY * 15}
              scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
              scrambleSpeed={SCRAMBLE_SPEED}
            >
              contact
            </ScrambleIn>
          </h2>
          <ul>
            <li>
              <ScrambleIn
                delay={ROW_DELAY * 15 + getAnimationDuration("daniel petho")}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
              >
                hello@danielpetho.com
              </ScrambleIn>
            </li>
            <br />
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border-b-2 border-transparent md:hover:border-foreground py-0 md:py-0.5 lg:py-1 inline-block"
                >
                  <ScrambleCombined
                    delay={
                      ROW_DELAY * 17 +
                      getAnimationDuration("daniel petho") +
                      ROW_DELAY * index
                    }
                    scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                    scrambleSpeed={SCRAMBLE_SPEED}
                  >
                    {social.name}
                  </ScrambleCombined>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </main>
  );
}

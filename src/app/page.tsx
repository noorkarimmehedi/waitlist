import ScrambleCombined from "@/components/scramble-combined";
import ScrambleIn from "@/components/scramble-in";
import ScrambleCombinedPair from "@/components/scramble-combined-pair";
import { projects, socials } from "@/data/content";
import {
  getAnimationDuration,
  ROW_DELAY,
  SCRAMBLE_SPEED,
  SCRAMBLED_LETTER_COUNT,
} from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black pl-4 lr-0 pt-10 pb-10 sm:px-4 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12 md:p-10 lg:p-12 font-normal text-[3.9vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-tight">
      <div>
        <div className="relative max-w-screen-2xl mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
          {/* Header */}
          <div className="flex flex-col items-start text-left sm:items-center sm:text-center">
            <h2 className="mb-6">
              <ScrambleCombined
                delay={0}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold text-[#0015ff]"
              >
                Kaarim
              </ScrambleCombined>
            </h2>
            <div className="flex flex-col items-start sm:items-center">
              <div className="pb-2">
                <ScrambleIn
                  delay={getAnimationDuration("Kaarim")}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                >
                  design ✺&#xfe0e; tech ∿&#xfe0e; build ◳&#xfe0e;
                </ScrambleIn>
              </div>
              <a
                href="#"
                target="_blank"
                className="cursor-pointer border-b-2 border-transparent md:hover:border-foreground pb-0.5 md:pb-0.5 lg:pb-1 inline-block mt-1"
              >
                <ScrambleCombined
                  delay={getAnimationDuration("Kaarim") + ROW_DELAY}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                  className="whitespace-pre"
                >
                  <span className="whitespace-pre">
                    developer & designer{" "}
                    <span className="md:hidden text-[2.5vw] sm:text-xs pb-1 -ml-0.5 font-medium">
                      ↗
                    </span>
                  </span>
                </ScrambleCombined>
              </a>
              <a
                href="https://tally.so/r/wz94LE"
                target="_blank"
                className="cursor-pointer border-b-2 border-transparent md:hover:border-[#0015ff] pb-0.5 md:pb-0.5 lg:pb-1 inline-block mt-4 font-medium text-[#0015ff]"
              >
                <ScrambleCombined
                  delay={getAnimationDuration("Kaarim") + ROW_DELAY * 2}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                >
                  Book a slot{" "}
                  <span className="md:hidden text-[2.5vw] sm:text-xs pb-1 -ml-0.5 font-medium">
                    ↗
                  </span>
                </ScrambleCombined>
              </a>
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col sm:flex-row">
            <h2 className="w-full mb-[2vw] sm:mb-0 sm:text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 7}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                Projects
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
                      leftTextString={project.title}
                      leftText={
                        <span className="w-full whitespace-pre">
                          {project.title}{" "}
                          <span className="md:hidden text-[2.5vw] sm:text-xs pb-1 -ml-0.5 font-medium">
                            ↗
                          </span>
                        </span>
                      }
                      rightText={project.year}
                      delay={
                        ROW_DELAY * 7 +
                        getAnimationDuration("Kaarim") +
                        ROW_DELAY * index
                      }
                      img={project.img}
                      imgAlt={`${project.title} project thumbnail`}
                      showImage={true}
                      scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                      scrambleSpeed={SCRAMBLE_SPEED}
                      containerClassName="group justify-between border-b-2 md:hover:border-foreground border-b-transparent cursor-pointer pb-0.5 md:pb-0.5 lg:pb-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row">
            <h2 className="w-full mb-[2vw] sm:mb-0 sm:text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 15}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                Contact
              </ScrambleIn>
            </h2>
            <ul>
              <li>
                <Image 
                  src="/imgi_2_imgi_11_image.webp" 
                  alt="Kaarim signature" 
                  width={60}
                  height={30}
                  className="h-auto w-auto max-w-[60px] mb-1"
                />
              </li>
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer border-b-2 border-b-transparent md:hover:border-[#0015ff] pb-0.5 md:pb-0.5 lg:pb-1 inline-block text-[#0015ff]"
                  >
                    <ScrambleCombined
                      delay={
                        ROW_DELAY * 17 +
                        getAnimationDuration("Kaarim") +
                        ROW_DELAY * index
                      }
                      scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                      scrambleSpeed={SCRAMBLE_SPEED}
                    >
                      {social.name}{" "}
                      <span className="md:hidden text-[2.5vw] sm:text-xs pb-1 -ml-0.5 font-medium">
                        ↗
                      </span>
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

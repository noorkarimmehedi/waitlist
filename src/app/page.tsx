import ScrambleCombined from "@/components/scramble-combined";
import ScrambleIn from "@/components/scramble-in";
import ScrambleCombinedPair from "@/components/scramble-combined-pair";
import { socials } from "@/data/content";
import {
  getAnimationDuration,
  ROW_DELAY,
  SCRAMBLE_SPEED,
  SCRAMBLED_LETTER_COUNT,
} from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black pl-4 lr-0 pt-16 pb-6 sm:px-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-6 lg:pt-28 lg:pb-6 md:px-10 lg:px-12 font-normal text-[3.9vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-tight">
      <div>
        <div className="relative max-w-screen-2xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
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
            <ul className="text-center">
              <li>
                <ScrambleIn
                  delay={getAnimationDuration("Kaarim")}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                  className="pb-0.5 md:pb-0.5 lg:pb-1 inline-block"
                >
                  design ✺&#xfe0e; tech ∿&#xfe0e; build ◳&#xfe0e;
                </ScrambleIn>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="cursor-pointer border-b-2 border-transparent md:hover:border-foreground pb-0.5 md:pb-0.5 lg:pb-1 inline-block"
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
              </li>
              <li>
                <a
                  href="https://tally.so/r/wz94LE"
                  target="_blank"
                  className="cursor-pointer border-b-2 border-transparent md:hover:border-[#0015ff] pb-0.5 md:pb-0.5 lg:pb-1 inline-block font-medium text-[#0015ff]"
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
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6">
              <ScrambleCombined
                delay={ROW_DELAY * 15}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold text-[#0015ff]"
              >
                Contact
              </ScrambleCombined>
            </h2>
            <ul className="text-center">
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

          {/* Showcase */}
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="mb-6">
              <ScrambleCombined
                delay={ROW_DELAY * 20}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold text-[#0015ff]"
              >
                Showcase
              </ScrambleCombined>
            </h2>
            <div className="w-full max-w-4xl mx-auto">
              <Image 
                src="/Showcase_01.webp" 
                alt="Project showcase" 
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

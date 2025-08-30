import ScrambleCombined from "@/components/scramble-combined";
import ScrambleIn from "@/components/scramble-in";
import NeumorphicButton from "@/components/neumorphic-button";
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
    <main className="min-h-screen bg-[#fefefe] text-black px-0 pt-16 pb-6 sm:px-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-6 lg:pt-28 lg:pb-6 md:px-10 lg:px-12 font-normal text-[3.9vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-tight">
      <div>
        <div className="relative max-w-screen-2xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-0 w-full">
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
                <NeumorphicButton href="https://tally.so/r/wz94LE">
                  Book Your slot ↗
                </NeumorphicButton>
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
          <div className="flex flex-col items-center text-center w-full px-0">
            <h2 className="mb-6">
              <ScrambleCombined
                delay={ROW_DELAY * 20}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold text-[#0015ff]"
              >
                My own Museum
              </ScrambleCombined>
            </h2>
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-3xl mx-auto px-0 sm:px-4 flex flex-col gap-8">
                {/* First image with explicit dimensions */}
                <div 
                  className="w-full overflow-hidden rounded-lg bg-gray-50" 
                  style={{ 
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image 
                    src="/img/Showcase_02.webp" 
                    alt="Project showcase" 
                    width={1200}
                    height={800}
                    quality={90}
                    priority={true}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                
                {/* Second image with explicit dimensions */}
                <div 
                  className="w-full overflow-hidden rounded-lg bg-gray-50" 
                  style={{ 
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image 
                    src="/img/imgi_3_a-trips-travel-app.webp" 
                    alt="Trips travel app" 
                    width={1200}
                    height={800}
                    quality={90}
                    priority={true}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                
                {/* Third image with explicit dimensions */}
                <div 
                  className="w-full overflow-hidden rounded-lg bg-gray-50" 
                  style={{ 
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image 
                    src="/showcase_03.webp" 
                    alt="Project showcase" 
                    width={1200}
                    height={800}
                    quality={90}
                    priority={true}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

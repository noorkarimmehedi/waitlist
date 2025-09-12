"use client";

import Image from "next/image";
import WaitlistForm from "@/components/waitlist-form";
import ScrambleHover from "@/components/scramble-hover";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black px-4 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-6 md:pt-24 md:pb-6 lg:pt-28 lg:pb-6 font-normal text-[3.9vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-tight text-center">
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Main Title */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-full max-w-full md:max-w-md">
              <h1 className="mb-3 sm:mb-6 text-left">
                <ScrambleHover
                  scrambleSpeed={30}
                  maxIterations={15}
                  useOriginalCharsOnly={true}
                  className="font-bold text-[#0015ff] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words inline-block"
                >
                  Dear You,
                </ScrambleHover>
              </h1>
              
              <div className="mb-0 text-left">
                <ScrambleHover
                  scrambleSpeed={30}
                  maxIterations={15}
                  useOriginalCharsOnly={true}
                  className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words inline-block"
                >
                  A new adventure is about to begin ✺&#xfe0e;
                </ScrambleHover>
              </div>
            </div>
          </div>

          {/* Email Form */}
          <div className="w-full max-w-md -mt-2 md:-mt-6">
            <WaitlistForm />
            <div className="mt-4 text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                Be the first to know when we launch. Join our waitlist and get early access to something extraordinary.
              </p>
              <div className="mt-4">
                <ScrambleHover
                  scrambleSpeed={30}
                  maxIterations={15}
                  useOriginalCharsOnly={true}
                  className="block font-normal text-base sm:text-lg"
                >
                  Kindest regards,
                </ScrambleHover>
                <Image 
                  src="/imgi_2_imgi_11_image.webp"
                  alt="Onlooop Team signature"
                  width={48}
                  height={48}
                  className="w-12 h-auto mt-2 mb-1"
                />
                <ScrambleHover
                  scrambleSpeed={30}
                  maxIterations={15}
                  useOriginalCharsOnly={true}
                  className="block font-normal text-sm sm:text-base mt-1"
                >
                  Onlooop Team
                </ScrambleHover>
                <hr className="mt-2 border-t border-gray-300 w-24" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-2">
            <span className="text-xs sm:text-sm md:text-base opacity-50">
              No spam. Unsubscribe anytime.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

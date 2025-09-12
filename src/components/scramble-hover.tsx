"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrambleHoverProps {
  children: string;
  scrambleSpeed?: number;
  maxIterations?: number;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  useInternalHover?: boolean;
  isHovering?: boolean;
}

const ScrambleHover: React.FC<ScrambleHoverProps> = ({
  children,
  scrambleSpeed = 30,
  maxIterations = 15,
  useOriginalCharsOnly = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  className = "",
  useInternalHover = true,
  isHovering: externalIsHovering,
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [internalIsHovering, setInternalIsHovering] = useState(false);
  
  const isHovering = useInternalHover ? internalIsHovering : externalIsHovering;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let iterations = 0;

    const shuffleText = () => {
      if (!isHovering) return children;
      
      const words = children.split(/(\s+)/);
      const originalChars = useOriginalCharsOnly 
        ? Array.from(new Set(children.replace(/\s+/g, "").split("")))
        : characters.split("");

      return words
        .map((word: string) => {
          if (/\s+/.test(word)) return word;
          return word
            .split("")
            .map(() => originalChars[Math.floor(Math.random() * originalChars.length)])
            .join("");
        })
        .join("");
    };

    if (isHovering) {
      interval = setInterval(() => {
        setDisplayText(shuffleText());
        iterations++;

        if (iterations >= maxIterations) {
          if (interval) clearInterval(interval);
          setDisplayText(children);
        }
      }, scrambleSpeed);
    } else {
      setDisplayText(children);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, children, characters, scrambleSpeed, maxIterations, useOriginalCharsOnly]);

  return (
    <motion.span
      className={className}
      onHoverStart={() => useInternalHover && setInternalIsHovering(true)}
      onHoverEnd={() => useInternalHover && setInternalIsHovering(false)}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleHover;

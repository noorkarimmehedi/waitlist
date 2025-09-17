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
}

const ScrambleHover: React.FC<ScrambleHoverProps> = ({
  children,
  scrambleSpeed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let iterations = 0;

    const shuffleText = () => {
      const originalChars = useOriginalCharsOnly 
        ? Array.from(new Set(children.split(""))).filter(char => char !== " ")
        : characters.split("");

      return children
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          return originalChars[Math.floor(Math.random() * originalChars.length)];
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
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleHover;
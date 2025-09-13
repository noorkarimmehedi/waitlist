"use client";

import { motion, Variant } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedText = ({ children, className = "", delay = 0, duration = 0.5 }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "tween",
        duration: duration,
      }
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        bounce: 0.3,
        damping: 20
      }
    } as Variant
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
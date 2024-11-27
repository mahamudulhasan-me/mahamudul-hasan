"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Children, useEffect, useState } from "react";

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.5 },
  variants,
  onIndexChange,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 1000;

    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const motionVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 1, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div
      className={cn("relative inline-flex flex-wrap break-words", className)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

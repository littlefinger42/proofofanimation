"use client";
/**
 * Have to wrap pages in PageWrapper because there are issues using exit animations on Layouts with framer
 * https://github.com/framer/motion/issues/1850
 */

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    <motion.div
      className="min-h-full"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.15 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

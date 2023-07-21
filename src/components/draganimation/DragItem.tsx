"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Position } from "./types";

interface DragItemProps {
  color?: string;
  setPosition: (i: number, offset: Position) => void;
  moveItem: (i: number, dragOffset: number) => void;
  i: number;
}

export const DragItem: React.FC<DragItemProps> = ({
  color = "blue",
  setPosition,
  moveItem,
  i,
}) => {
  const [isDragging, setDragging] = useState(false);
  const ref = useRef(null);

  const dragOriginY = useMotionValue(0);

  useEffect(() => {
    setPosition(i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop,
    });
  });

  return (
    <motion.li
      ref={ref}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      animate={
        isDragging
          ? { zIndex: 1 }
          : {
              zIndex: 0,
              transition: { delay: 0.3 },
            }
      }
      style={{ background: color, height: 40 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      drag="y"
      dragOriginY={dragOriginY}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDrag={(e, { point }) => moveItem(i, point.y)}
      positionTransition={({ delta }) => {
        if (isDragging) {
          // If we're dragging, we want to "undo" the items movement within the list
          // by manipulating its dragOriginY. This will keep the item under the cursor,
          // even though it's jumping around the DOM.
          dragOriginY.set(dragOriginY.get() + delta.y);
        }

        // If `positionTransition` is a function and returns `false`, it's telling
        // Motion not to animate from its old position into its new one. If we're
        // dragging, we don't want any animation to occur.
        return !isDragging;
      }}
    />
  );
};

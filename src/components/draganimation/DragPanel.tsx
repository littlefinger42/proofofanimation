"use client";

import { useRef, useState } from "react";

import { DragItem } from "./DragItem";
import { findIndex, arrayMove } from "./utils";
import { Position } from "./types";
import { dragItemsInitialConfiguration } from "./constants";

interface DragPanelProps {}

export const DragPanel: React.FC<DragPanelProps> = () => {
  const [dragItems, setDragItems] = useState(dragItemsInitialConfiguration);

  // We need an array of height and position data for all of the component's children for calculations when dragging
  const positions = useRef<Position[]>([]).current;
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);

  // Find index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) setDragItems(arrayMove(dragItems, i, targetIndex));
  };

  return (
    <ul>
      {dragItems.map((dragItem: string, i: number) => (
        <DragItem
          key={dragItem}
          i={i}
          color={dragItem}
          setPosition={setPosition}
          moveItem={moveItem}
        />
      ))}
    </ul>
  );
};

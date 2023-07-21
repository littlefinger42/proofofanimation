import { Position } from "./types";

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

const difference = (a: number, b: number) => Math.abs(a - b);

// Stop rapid reverse swapping
const buffer = 5;

const findIndex = (i: number, yOffset: number, positions: Position[]) => {
  let target = i;
  const { top, height } = positions[i];
  const bottom = top + height;

  // If moving down
  if (yOffset > 0) {
    const nextItem = positions[i + 1];
    if (nextItem === undefined) return i;

    const swapOffset =
      difference(bottom, nextItem.top + nextItem.height / 2) + buffer;
    if (yOffset > swapOffset) target = i + 1;

    // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[i - 1];
    if (prevItem === undefined) return i;

    const prevBottom = prevItem.top + prevItem.height;
    const swapOffset =
      difference(top, prevBottom - prevItem.height / 2) + buffer;
    if (yOffset < -swapOffset) target = i - 1;
  }

  return clamp(0, positions.length, target);
};

const arrayMove = (arr: any[], fromIndex: number, toIndex: number) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
};

export { findIndex, arrayMove };

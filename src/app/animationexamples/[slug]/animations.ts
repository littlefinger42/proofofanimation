import { DragPanel } from "../../../components/draganimation/DragPanel";

interface AnimationType {
  id: number;
  AnimationComponent: React.FC;
}

const animations: AnimationType[] = [
  {
    id: 0,
    AnimationComponent: DragPanel,
  },
  // {
  //   id: 1,
  //   AnimationComponent: TODO,
  // },
  // {
  //   id: 2,
  //   AnimationComponent: TODO,
  // },
];

export { animations };

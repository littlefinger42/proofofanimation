import { AnimationOne } from "../../../components/animationone/AnimationOne";

interface AnimationType {
  id: number;
  AnimationComponent: React.FC;
}

const animations: AnimationType[] = [
  {
    id: 0,
    AnimationComponent: AnimationOne,
  },
  {
    id: 1,
    AnimationComponent: AnimationOne,
  },
  {
    id: 2,
    AnimationComponent: AnimationOne,
  },
];

export { animations };

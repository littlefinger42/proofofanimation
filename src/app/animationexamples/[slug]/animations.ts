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
];

export { animations };
